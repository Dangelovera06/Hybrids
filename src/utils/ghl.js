/**
 * GoHighLevel Integration Utilities
 * 
 * This file contains helper functions for submitting leads to GoHighLevel
 */

/**
 * Submit lead data to GoHighLevel via Webhook
 * 
 * @param {Object} leadData - The lead information to submit
 * @param {string} leadData.name - Full name of the lead
 * @param {string} leadData.email - Email address
 * @param {string} leadData.phone - Phone number
 * @param {Object} [leadData.customFields] - Additional custom fields
 * @param {string} [leadData.source] - Lead source (e.g., 'Dental Quiz', 'Contact Form')
 * @param {string[]} [leadData.tags] - Array of tags to apply
 * @returns {Promise<Object>} Response from GHL webhook
 */
export async function submitLeadToGHL(leadData) {
  const GHL_WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL;

  if (!GHL_WEBHOOK_URL || GHL_WEBHOOK_URL === 'YOUR_GHL_WEBHOOK_URL_HERE') {
    console.warn('⚠️ GHL Webhook URL not configured in environment variables');
    return { success: false, error: 'Webhook not configured' };
  }

  try {
    // Split name into first and last name
    const nameParts = leadData.name.split(' ');
    const firstName = nameParts[0] || leadData.name;
    const lastName = nameParts.slice(1).join(' ') || '';

    // Build the payload
    const payload = {
      firstName,
      lastName,
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      source: leadData.source || 'Website',
      leadSource: leadData.leadSource || 'Website Form',
      tags: leadData.tags || ['website-lead'],
      
      // Add any custom fields
      ...leadData.customFields
    };

    console.log('📤 Sending lead to GoHighLevel:', { email: leadData.email, source: leadData.source });

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ Lead successfully submitted to GoHighLevel');
      return { success: true, data: await response.json() };
    } else {
      const errorText = await response.text();
      console.error('❌ GHL submission failed:', errorText);
      return { success: false, error: errorText };
    }
  } catch (error) {
    console.error('❌ GHL submission error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Track lead event with GHL External Tracking (Analytics)
 * This is separate from lead submission - it tracks visitor behavior
 * 
 * @param {string} eventName - Name of the event (e.g., 'Lead', 'PageView')
 * @param {Object} eventData - Event properties
 */
export function trackGHLEvent(eventName, eventData) {
  if (typeof window !== 'undefined' && window.externalTracking) {
    try {
      window.externalTracking.track(eventName, eventData);
      console.log(`✅ GHL event tracked: ${eventName}`);
    } catch (error) {
      console.error('❌ GHL tracking error:', error);
    }
  } else {
    console.warn('⚠️ GHL external tracking not available');
  }
}

/**
 * Submit lead to GHL API (Alternative to Webhook)
 * Requires GHL API key and Location ID
 * 
 * @param {Object} leadData - The lead information
 * @returns {Promise<Object>} Response from GHL API
 */
export async function submitLeadToGHLAPI(leadData) {
  const GHL_API_KEY = import.meta.env.VITE_GHL_API_KEY;
  const GHL_LOCATION_ID = import.meta.env.VITE_GHL_LOCATION_ID;

  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.warn('⚠️ GHL API credentials not configured');
    return { success: false, error: 'API not configured' };
  }

  try {
    const nameParts = leadData.name.split(' ');
    const firstName = nameParts[0] || leadData.name;
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email: leadData.email,
      phone: leadData.phone,
      source: leadData.source || 'Website',
      tags: leadData.tags || ['website-lead'],
      customFields: Object.entries(leadData.customFields || {}).map(([key, value]) => ({
        key,
        value: String(value)
      }))
    };

    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ Lead successfully submitted to GHL API');
      return { success: true, data: await response.json() };
    } else {
      const errorText = await response.text();
      console.error('❌ GHL API submission failed:', errorText);
      return { success: false, error: errorText };
    }
  } catch (error) {
    console.error('❌ GHL API error:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Example usage in a form component:
 * 
 * import { submitLeadToGHL, trackGHLEvent } from '@/utils/ghl';
 * 
 * const handleSubmit = async (e) => {
 *   e.preventDefault();
 *   
 *   const result = await submitLeadToGHL({
 *     name: userInfo.name,
 *     email: userInfo.email,
 *     phone: userInfo.phone,
 *     source: 'Contact Form',
 *     leadSource: 'Website Contact',
 *     tags: ['contact-lead', 'inquiry'],
 *     customFields: {
 *       message: userInfo.message,
 *       preferredContactMethod: userInfo.preferredMethod
 *     }
 *   });
 *   
 *   if (result.success) {
 *     // Show success message
 *     trackGHLEvent('FormSubmission', { formType: 'contact' });
 *   }
 * };
 */


