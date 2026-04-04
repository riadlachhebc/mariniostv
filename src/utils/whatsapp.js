export const createWhatsAppLink = (message) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890';
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const WA_MESSAGES = {
  buyGeneric: 'Hello, I want to buy Marinios IPTV. Please help me choose the best plan.',
  freeTrial: 'Hello, I want a free trial for Marinios IPTV. Please send me the trial details.',
  buyPlan: (plan) => `Hello, I want to buy the ${plan} Marinios IPTV plan.`,
  widgetHelp: 'Hello, I’m interested in Marinios IPTV. I need more information.',
};
