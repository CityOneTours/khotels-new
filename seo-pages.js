(() => {
  const form = document.querySelector('#conference-enquiry');
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(form).entries());
    if (typeof window.gtag === 'function') window.gtag('event', 'conference_enquiry_submit', { event_category: 'engagement' });
    const subject = encodeURIComponent('Conference enquiry - K Hotels Entebbe');
    const body = encodeURIComponent(`Name: ${values.name}\nOrganisation: ${values.organisation}\nEvent date: ${values.event_date}\nExpected attendees: ${values.attendees}\nPreferred layout: ${values.layout}`);
    window.location.href = `mailto:info@khotels.ug?subject=${subject}&body=${body}`;
  });
  document.querySelectorAll('a[href^="tel:"],a[href^="mailto:"],a[href*="wa.me"],a[href*="whatsapp.com"]').forEach((link) => link.addEventListener('click', () => {
    if (typeof window.gtag !== 'function') return;
    const eventName = link.href.startsWith('tel:')
      ? 'phone_click'
      : link.href.startsWith('mailto:')
        ? 'email_click'
        : 'whatsapp_click';
    window.gtag('event', eventName, { link_url: link.href });
  }));
  document.querySelectorAll('a[href*="bookings.resavenue.com"]').forEach((link) => link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') window.gtag('event', 'book_now_click', { link_url: link.href });
  }));
})();
