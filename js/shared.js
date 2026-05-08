// shared.js — handles sidebar and footer only
// Header is now baked directly into each HTML page to prevent logo blinking

function initPage() {

  // Inject footer
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="discover-strip">
        <h3>Discover More</h3>
        <div class="disc-grid">
          <a class="disc-card" href="worship.html"><span class="disc-icon">✝</span><span class="disc-label">Worship</span></a>
          <a class="disc-card" href="garden.html"><span class="disc-icon">🌱</span><span class="disc-label">Community Garden</span></a>
          <a class="disc-card" href="arts.html"><span class="disc-icon">🎨</span><span class="disc-label">Arts</span></a>
          <a class="disc-card" href="support.html"><span class="disc-icon">🤝</span><span class="disc-label">Support Services</span></a>
        </div>
      </div>
      <footer class="site-footer">
        <div class="footer-nav">
          <a href="index.html">Home</a>
          <a href="worship.html">Worship</a>
          <a href="mission.html">Mission</a>
          <a href="programs.html">Programs</a>
          <a href="support.html">Community Support</a>
          <a href="arts.html">Arts</a>
          <a href="garden.html">Community Garden</a>
          <a href="events.html">Events</a>
          <a href="venue-hire.html">Venue Hire</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-bottom">
          <span class="footer-copy">© 2026 Hampton Park Uniting Place · 1 Coral Drive, Hampton Park VIC 3976 · (03) 9799 7994</span>
          <div class="social-links">
            <a class="social-btn" href="https://www.facebook.com/HamptonParkUnitingChurch">f</a>
          </div>
        </div>
      </footer>`;
  }

  // Sidebar content
  const sidebar = document.getElementById('sidebar-content');
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="sb-block">
        <h3>Join Us on Sunday</h3>
        <div class="worship-box">
          <div class="wd">Every Sunday</div>
          <div class="wt">10:00 am</div>
          <div class="wa">1 Coral Drive, Hampton Park</div>
        </div>
        <p class="sb-note">All are welcome — whether it's your first visit or your hundredth. Come as you are.</p>
      </div>
      <div class="sb-block">
        <h3>Upcoming Events</h3>
        <div class="event-item"><div class="event-date">Thu 8 May</div><div class="event-name">Community Lunch &amp; Pantry</div></div>
        <div class="event-item"><div class="event-date">Sat 10 May</div><div class="event-name">Hampton Park Artist Group</div></div>
        <div class="event-item"><div class="event-date">Sun 11 May</div><div class="event-name">Sunday Worship 10:00 am</div></div>
        <div class="event-item"><div class="event-date">Thu 15 May</div><div class="event-name">Community Lunch &amp; Pantry</div></div>
        <div class="event-item"><div class="event-date">Sat 7 Jun</div><div class="event-name">Hampton Park Artist Group</div></div>
        <a class="read-more" href="events.html" style="display:block;margin-top:9px">Full calendar &rsaquo;</a>
      </div>
      <div class="sb-block">
        <h3>Contact &amp; Office Hours</h3>
        <div style="font-family:Arial,sans-serif;font-size:12px;color:#555;line-height:1.8;">
          <p style="margin-bottom:6px;">
            <strong style="color:#541974;">Phone</strong><br>(03) 9799 7994
          </p>
          <p style="margin-bottom:6px;">
            <strong style="color:#541974;">Email</strong><br>
            <a href="mailto:office@unitingplace.org" style="color:#72239c;">office@unitingplace.org</a>
          </p>
          <div style="margin-top:8px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span id="open-status"></span>
            <button onclick="var d=document.getElementById('hours-dropdown');d.style.display=d.style.display==='block'?'none':'block';"
              style="background:none;border:none;cursor:pointer;font-size:11px;color:#541974;font-family:Arial,sans-serif;font-weight:700;padding:0;">
              Office hours ▾
            </button>
          </div>
          <div id="hours-dropdown" style="display:none;margin-top:8px;background:#fff;border:0.5px solid #dcc8ea;border-radius:4px;padding:10px 12px;">
            <table style="width:100%;font-size:11px;font-family:Arial,sans-serif;border-collapse:collapse;">
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Monday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 2:30 pm</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Tuesday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 2:30 pm</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Wednesday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 2:30 pm</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Thursday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 2:30 pm</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Friday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 2:30 pm</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Saturday</td><td style="padding:3px 0;color:#555;text-align:right;">Closed</td></tr>
              <tr><td style="padding:3px 0;color:#541974;font-weight:700;">Sunday</td><td style="padding:3px 0;color:#555;text-align:right;">9:30 am – 1:00 pm</td></tr>
            </table>
          </div>
        </div>
      </div>
      <div class="sb-block">
        <h3>Stay Connected</h3>
        <div class="nl-box">
          <p>Sign up for our weekly newsletter — news, events and reflections from Uniting Place.</p>
          <input type="text" placeholder="Your name" /><br>
          <input type="email" placeholder="Your email address" style="margin-top:6px" />
          <button style="margin-top:8px">Subscribe</button>
        </div>
      </div>
      <div class="sb-block">
        <h3>Acknowledgement of Country</h3>
        <div class="ack-box">We acknowledge the Traditional Custodians of the land on which we meet and worship, and pay our respects to Elders past, present and emerging.</div>
      </div>
      <div class="sb-block">
        <h3>Find Us</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.503899207655!2d145.2654329758383!3d-38.03534354673405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6111d1a9aed5d%3A0x730cd54ed23b525d!2s1%20Coral%20Dr%2C%20Hampton%20Park%20VIC%203976!5e0!3m2!1sen!2sau!4v1778056731889!5m2!1sen!2sau" width="100%" height="200" style="border:0;border-radius:4px;display:block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p style="font-family:Arial,sans-serif;font-size:12px;color:#555;margin-top:8px;line-height:1.6;">1 Coral Drive<br>Hampton Park VIC 3976</p>
      </div>`;
  }

  // ── OPEN / CLOSED status ──
  const hours = {
    0: [9.5, 13.0],   // Sunday   9:30am – 1:00pm
    1: [9.5, 14.5],   // Monday   9:30am – 2:30pm
    2: [9.5, 14.5],   // Tuesday  9:30am – 2:30pm
    3: [9.5, 14.5],   // Wednesday 9:30am – 2:30pm
    4: [9.5, 14.5],   // Thursday 9:30am – 2:30pm
    5: [9.5, 14.5],   // Friday   9:30am – 2:30pm
    6: null,          // Saturday — Closed
  };

  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;
  const range = hours[day];
  const isOpen = range && time >= range[0] && time < range[1];

  const badge = document.getElementById('open-status');
  if (badge) {
    badge.innerHTML = isOpen
      ? '<span style="background:#2a7a2a;color:#fff;font-size:11px;font-weight:700;font-family:Arial,sans-serif;padding:3px 10px;border-radius:10px;letter-spacing:.05em;">OPEN</span>'
      : '<span style="background:#a02020;color:#fff;font-size:11px;font-weight:700;font-family:Arial,sans-serif;padding:3px 10px;border-radius:10px;letter-spacing:.05em;">CLOSED</span>';
  }

}