export function trackContact(onComplete?: () => void) {
  if (typeof window === "undefined") {
    onComplete?.();
    return;
  }

  let completed = false;
  const finish = () => {
    if (completed) return;
    completed = true;
    onComplete?.();
  };

  if (window.fbq) {
    window.fbq("track", "Contact", {}, {
      eventCallback: finish,
      eventTimeout: 1000,
    });
    window.setTimeout(finish, 1000);
    return;
  }

  finish();
}
