export function formatPhoneForApps(phone) {
    if (!phone) return "";
  
    let cleaned = phone.replace(/\D/g, "");
  
    if (cleaned.startsWith("0")) {
      cleaned = "381" + cleaned.slice(1);
    }
  
    return cleaned;
  }