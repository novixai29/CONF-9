"use strict";


/* =========================================================
   CONF-009 — FOCUS FIELD
   مجال التركيز

   جميع بيانات الزبون من هنا فقط
========================================================= */

const CONFERENCE = {

  name:
    "الندوة العلمية للعلوم الحيوية 2027",

  shortName:
    "BS / 27",

  tagline:
    "نقترب أكثر لنرى ما لا يظهر من بعيد",

  organizer:
    "مركز الموصل للبحوث الحيوية",


  startAt:
    "2027-12-12T09:30:00+03:00",

  endAt:
    "2027-12-12T16:30:00+03:00",

  timeZone:
    "Asia/Baghdad",


  venue:
    "مركز الموصل للبحوث العلمية",

  city:
    "الموصل",

  country:
    "العراق",


  /*
    اتركه فارغاً ليتم تكوين
    رابط Google Maps تلقائياً.
  */
  mapsUrl:
    "",


  /*
    رابط التسجيل الخارجي.
    إذا تركته فارغاً يختفي الزر.
  */
  registrationUrl:
    "https://example.com/register",


  websiteUrl:
    "https://example.com",


  /*
    إذا تركته فارغاً يستخدم
    رابط الدعوة الحالي.
  */
  shareUrl:
    "",


  speaker: {

    name:
      "أ.د. أحمد سالم",

    role:
      "أستاذ العلوم الحيوية الجزيئية",

    organization:
      "جامعة الموصل",

    topic:
      "من الخلية إلى البيانات: كيف تتغير أدوات البحث الحيوي؟"

  },


  focusPoints: [

    {
      label:
        "الموضوع",

      title:
        "علم الأحياء في عصر البيانات",

      description:
        "قراءة في كيفية تغيّر البحث الحيوي عندما تلتقي المختبرات بالبيانات والتحليل الرقمي.",

      x:
        76,

      y:
        27
    },

    {
      label:
        "المتحدث",

      title:
        "أ.د. أحمد سالم",

      description:
        "أستاذ العلوم الحيوية الجزيئية في جامعة الموصل ومتحدث الندوة الرئيسي.",

      x:
        22,

      y:
        61
    },

    {
      label:
        "الموعد",

      title:
        "12 كانون الأول 2027",

      description:
        "تبدأ الندوة الساعة 9:30 صباحاً وتستمر حتى الساعة 4:30 مساءً.",

      x:
        58,

      y:
        79
    }

  ],


  themes: [

    {
      index:
        "01",

      time:
        "10:30",

      title:
        "الجزيئات",

      description:
        "كيف تساعد التقنيات الحديثة على رؤية وفهم العمليات الحيوية على المستوى الجزيئي."
    },

    {
      index:
        "02",

      time:
        "12:30",

      title:
        "البيانات",

      description:
        "كيف تتحول النتائج المختبرية إلى بيانات يمكن تحليلها وربطها بأنماط علمية أوسع."
    },

    {
      index:
        "03",

      time:
        "14:30",

      title:
        "الترجمة العلمية",

      description:
        "كيف تنتقل المعرفة من البحث الأساسي إلى تطبيقات يمكن أن تخدم الصحة والمجتمع."
    }

  ]

};



/* =========================================================
   DATE OBJECTS
========================================================= */

const START_DATE =
  new Date(
    CONFERENCE.startAt
  );


const END_DATE =
  new Date(
    CONFERENCE.endAt
  );


let countdownTimer =
  null;


let currentFocusIndex =
  0;



/* =========================================================
   ELEMENTS
========================================================= */

const elements = {

  heroDate:
    document.getElementById(
      "heroDate"
    ),

  heroTime:
    document.getElementById(
      "heroTime"
    ),

  heroCity:
    document.getElementById(
      "heroCity"
    ),


  focusInterface:
    document.getElementById(
      "focusInterface"
    ),

  focusSurface:
    document.getElementById(
      "focusSurface"
    ),

  focusLens:
    document.getElementById(
      "focusLens"
    ),

  focusIndex:
    document.getElementById(
      "focusIndex"
    ),

  focusTitle:
    document.getElementById(
      "focusTitle"
    ),

  focusDescription:
    document.getElementById(
      "focusDescription"
    ),


  days:
    document.getElementById(
      "days"
    ),

  hours:
    document.getElementById(
      "hours"
    ),

  minutes:
    document.getElementById(
      "minutes"
    ),

  seconds:
    document.getElementById(
      "seconds"
    ),

  daysRing:
    document.getElementById(
      "daysRing"
    ),

  hoursRing:
    document.getElementById(
      "hoursRing"
    ),

  minutesRing:
    document.getElementById(
      "minutesRing"
    ),

  secondsRing:
    document.getElementById(
      "secondsRing"
    ),

  countdownMessage:
    document.getElementById(
      "countdownMessage"
    ),


  speakerName:
    document.getElementById(
      "speakerName"
    ),

  speakerRole:
    document.getElementById(
      "speakerRole"
    ),

  speakerOrganization:
    document.getElementById(
      "speakerOrganization"
    ),

  speakerTopic:
    document.getElementById(
      "speakerTopic"
    ),


  themesGrid:
    document.getElementById(
      "themesGrid"
    ),


  venueCity:
    document.getElementById(
      "venueCity"
    ),

  venueCountry:
    document.getElementById(
      "venueCountry"
    ),


  mapButton:
    document.getElementById(
      "mapButton"
    ),

  secondaryMapButton:
    document.getElementById(
      "secondaryMapButton"
    ),

  registerButton:
    document.getElementById(
      "registerButton"
    ),

  websiteButton:
    document.getElementById(
      "websiteButton"
    ),


  calendarButton:
    document.getElementById(
      "calendarButton"
    ),

  shareButton:
    document.getElementById(
      "shareButton"
    ),

  topShareButton:
    document.getElementById(
      "topShareButton"
    ),


  footerYear:
    document.getElementById(
      "footerYear"
    ),

  statusMessage:
    document.getElementById(
      "statusMessage"
    )

};



/* =========================================================
   POPULATE PAGE
========================================================= */

function populateConference() {

  document
    .querySelectorAll(
      "[data-field]"
    )
    .forEach(
      element => {

        const field =
          element.dataset.field;


        if (
          Object.prototype.hasOwnProperty.call(
            CONFERENCE,
            field
          )
        ) {

          element.textContent =
            CONFERENCE[field];

        }

      }
    );


  elements.heroDate.textContent =
    formatArabicDate(
      START_DATE
    );


  elements.heroTime.textContent =
    `${formatArabicTime(START_DATE)} — ${formatArabicTime(END_DATE)}`;


  elements.heroCity.textContent =
    `${CONFERENCE.city} — ${CONFERENCE.country}`;


  elements.speakerName.textContent =
    CONFERENCE.speaker.name;


  elements.speakerRole.textContent =
    CONFERENCE.speaker.role;


  elements.speakerOrganization.textContent =
    CONFERENCE.speaker.organization;


  elements.speakerTopic.textContent =
    CONFERENCE.speaker.topic;


  elements.venueCity.textContent =
    CONFERENCE.city;


  elements.venueCountry.textContent =
    CONFERENCE.country;


  elements.footerYear.textContent =
    formatArabicNumber(
      START_DATE.getFullYear()
    );


  configureLinks();

  updateMetadata();

  addStructuredData();

}



/* =========================================================
   DATE FORMAT
========================================================= */

function formatArabicDate(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      day:
        "numeric",

      month:
        "long",

      year:
        "numeric"
    }
  ).format(date);

}



function formatArabicTime(date) {

  return new Intl.DateTimeFormat(
    "ar-IQ",
    {
      timeZone:
        CONFERENCE.timeZone,

      hour:
        "numeric",

      minute:
        "2-digit",

      hour12:
        true
    }
  ).format(date);

}



/* =========================================================
   FOCUS INTERACTION
========================================================= */

function setupFocusInteraction() {

  const buttons =
    Array.from(
      document.querySelectorAll(
        ".focus-button"
      )
    );


  let isDragging =
    false;


  elements.focusSurface
    .addEventListener(
      "pointerdown",
      event => {

        isDragging =
          true;


        elements.focusSurface
          .setPointerCapture(
            event.pointerId
          );


        moveLensToPointer(
          event,
          buttons
        );

      }
    );


  elements.focusSurface
    .addEventListener(
      "pointermove",
      event => {

        if (!isDragging) {
          return;
        }


        moveLensToPointer(
          event,
          buttons
        );

      }
    );


  elements.focusSurface
    .addEventListener(
      "pointerup",
      event => {

        isDragging =
          false;


        snapLensToFocus(
          currentFocusIndex
        );


        try {

          elements.focusSurface
            .releasePointerCapture(
              event.pointerId
            );

        } catch (error) {
          /* no action */
        }

      }
    );


  elements.focusSurface
    .addEventListener(
      "pointercancel",
      () => {

        isDragging =
          false;


        snapLensToFocus(
          currentFocusIndex
        );

      }
    );


  /*
    Keyboard accessibility
  */

  elements.focusSurface
    .addEventListener(
      "keydown",
      event => {

        if (
          event.key !==
            "ArrowRight" &&
          event.key !==
            "ArrowLeft"
        ) {
          return;
        }


        event.preventDefault();


        const direction =
          event.key ===
          "ArrowLeft"
            ? 1
            : -1;


        const next =
          (
            currentFocusIndex +
            direction +
            CONFERENCE.focusPoints.length
          ) %
          CONFERENCE.focusPoints.length;


        selectFocusPoint(
          next,
          buttons
        );

      }
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.focusIndex
            );


          selectFocusPoint(
            index,
            buttons
          );

        }
      );

    }
  );


  selectFocusPoint(
    0,
    buttons,
    false
  );

}



/* =========================================================
   MOVE LENS
========================================================= */

function moveLensToPointer(
  event,
  buttons
) {

  const rect =
    elements.focusSurface
      .getBoundingClientRect();


  let x =
    (
      (
        event.clientX -
        rect.left
      ) /
      rect.width
    ) *
    100;


  let y =
    (
      (
        event.clientY -
        rect.top
      ) /
      rect.height
    ) *
    100;


  x =
    clamp(
      x,
      10,
      90
    );


  y =
    clamp(
      y,
      14,
      86
    );


  setLensPosition(
    x,
    y
  );


  const nearestIndex =
    getNearestFocusPoint(
      x,
      y
    );


  if (
    nearestIndex !==
    currentFocusIndex
  ) {

    currentFocusIndex =
      nearestIndex;


    updateFocusContent(
      nearestIndex,
      buttons
    );

  }

}



/* =========================================================
   NEAREST FOCUS
========================================================= */

function getNearestFocusPoint(
  x,
  y
) {

  let nearest =
    0;


  let smallestDistance =
    Infinity;


  CONFERENCE.focusPoints.forEach(
    (point, index) => {

      const dx =
        point.x -
        x;


      const dy =
        point.y -
        y;


      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy
        );


      if (
        distance <
        smallestDistance
      ) {

        smallestDistance =
          distance;


        nearest =
          index;

      }

    }
  );


  return nearest;

}



/* =========================================================
   SELECT FOCUS
========================================================= */

function selectFocusPoint(
  index,
  buttons,
  animate = true
) {

  currentFocusIndex =
    index;


  snapLensToFocus(
    index
  );


  updateFocusContent(
    index,
    buttons,
    animate
  );

}



/* =========================================================
   SNAP LENS
========================================================= */

function snapLensToFocus(index) {

  const point =
    CONFERENCE.focusPoints[index];


  if (!point) {
    return;
  }


  setLensPosition(
    point.x,
    point.y
  );

}



/* =========================================================
   SET POSITION
========================================================= */

function setLensPosition(
  x,
  y
) {

  document.documentElement
    .style
    .setProperty(
      "--lens-x",
      `${x}%`
    );


  document.documentElement
    .style
    .setProperty(
      "--lens-y",
      `${y}%`
    );

}



/* =========================================================
   UPDATE FOCUS CONTENT
========================================================= */

function updateFocusContent(
  index,
  buttons,
  animate = true
) {

  const point =
    CONFERENCE.focusPoints[index];


  if (!point) {
    return;
  }


  buttons.forEach(
    (button, buttonIndex) => {

      const active =
        buttonIndex === index;


      button.classList.toggle(
        "is-active",
        active
      );


      button.setAttribute(
        "aria-selected",
        String(active)
      );

    }
  );


  const apply =
    () => {

      elements.focusIndex.textContent =
        `${formatArabicNumber(index + 1)} / ${point.label}`;


      elements.focusTitle.textContent =
        point.title;


      elements.focusDescription.textContent =
        point.description;

    };


  if (
    !animate ||
    prefersReducedMotion()
  ) {

    apply();

    return;

  }


  const readout =
    elements.focusTitle.parentElement;


  const fade =
    readout.animate(
      [
        {
          opacity: 1,
          transform:
            "translateY(0)"
        },

        {
          opacity: 0,
          transform:
            "translateY(6px)"
        }
      ],
      {
        duration:
          120,

        fill:
          "forwards",

        easing:
          "ease-in"
      }
    );


  fade.onfinish =
    () => {

      apply();


      readout.animate(
        [
          {
            opacity: 0,
            transform:
              "translateY(6px)"
          },

          {
            opacity: 1,
            transform:
              "translateY(0)"
          }
        ],
        {
          duration:
            220,

          fill:
            "forwards",

          easing:
            "ease-out"
        }
      );

    };

}



/* =========================================================
   THEMES
========================================================= */

function renderThemes() {

  elements.themesGrid.innerHTML =
    "";


  CONFERENCE.themes.forEach(
    theme => {

      const article =
        document.createElement(
          "article"
        );


      article.className =
        "theme-card reveal";


      article.innerHTML = `

        <span class="theme-card__index">
          ${escapeHTML(theme.index)}
        </span>

        <p class="theme-card__time">
          ${escapeHTML(theme.time)}
        </p>

        <h3>
          ${escapeHTML(theme.title)}
        </h3>

        <p>
          ${escapeHTML(theme.description)}
        </p>

      `;


      elements.themesGrid
        .appendChild(
          article
        );

    }
  );

}



/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



function updateCountdown() {

  const now =
    new Date();


  const difference =
    START_DATE.getTime() -
    now.getTime();


  if (
    difference <= 0
  ) {

    handleConferenceStarted(
      now
    );

    return;

  }


  const totalSeconds =
    Math.floor(
      difference / 1000
    );


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds % 60;


  elements.days.textContent =
    formatArabicNumber(
      days
    );


  elements.hours.textContent =
    formatArabicTwoDigits(
      hours
    );


  elements.minutes.textContent =
    formatArabicTwoDigits(
      minutes
    );


  elements.seconds.textContent =
    formatArabicTwoDigits(
      seconds
    );


  /*
    Rings:
    days = based on 100 days max visual scale
  */

  setRingProgress(
    elements.daysRing,
    Math.min(
      days / 100,
      1
    )
  );


  setRingProgress(
    elements.hoursRing,
    hours / 24
  );


  setRingProgress(
    elements.minutesRing,
    minutes / 60
  );


  setRingProgress(
    elements.secondsRing,
    seconds / 60
  );

}



/* =========================================================
   RINGS
========================================================= */

function setRingProgress(
  element,
  percentage
) {

  const degrees =
    Math.max(
      0,
      Math.min(
        1,
        percentage
      )
    ) *
    360;


  element.style.setProperty(
    "--ring-progress",
    `${degrees}deg`
  );

}



/* =========================================================
   STARTED
========================================================= */

function handleConferenceStarted(now) {

  if (
    countdownTimer
  ) {

    clearInterval(
      countdownTimer
    );


    countdownTimer =
      null;

  }


  elements.days.textContent =
    "٠٠";


  elements.hours.textContent =
    "٠٠";


  elements.minutes.textContent =
    "٠٠";


  elements.seconds.textContent =
    "٠٠";


  [
    elements.daysRing,
    elements.hoursRing,
    elements.minutesRing,
    elements.secondsRing
  ].forEach(
    ring => {

      ring.style.setProperty(
        "--ring-progress",
        "360deg"
      );

    }
  );


  if (
    now.getTime() <=
    END_DATE.getTime()
  ) {

    elements.countdownMessage.textContent =
      "الندوة منعقدة الآن.";

  } else {

    elements.countdownMessage.textContent =
      "انتهى موعد هذه الندوة.";

  }

}



/* =========================================================
   MAP
========================================================= */

function getMapUrl() {

  const custom =
    CONFERENCE.mapsUrl?.trim();


  if (custom) {
    return custom;
  }


  const query =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(query)
  );

}



/* =========================================================
   LINKS
========================================================= */

function configureLinks() {

  const mapUrl =
    getMapUrl();


  elements.mapButton.href =
    mapUrl;


  elements.secondaryMapButton.href =
    mapUrl;


  const registration =
    CONFERENCE.registrationUrl?.trim();


  if (registration) {

    elements.registerButton.href =
      registration;

  } else {

    elements.registerButton.hidden =
      true;

  }


  const website =
    CONFERENCE.websiteUrl?.trim();


  if (website) {

    elements.websiteButton.href =
      website;

  } else {

    elements.websiteButton.hidden =
      true;

  }

}



/* =========================================================
   CALENDAR
========================================================= */

function downloadCalendar() {

  const location =
    [
      CONFERENCE.venue,
      CONFERENCE.city,
      CONFERENCE.country
    ]
      .filter(Boolean)
      .join(", ");


  const invitationUrl =
    getShareUrl();


  const description =
    [
      CONFERENCE.tagline,

      CONFERENCE.websiteUrl
        ? `الموقع الرسمي: ${CONFERENCE.websiteUrl}`
        : "",

      invitationUrl
        ? `رابط الدعوة: ${invitationUrl}`
        : ""
    ]
      .filter(Boolean)
      .join("\\n");


  const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Focus Field Invitation//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${createUID()}
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(START_DATE)}
DTEND:${formatICSDate(END_DATE)}
SUMMARY:${escapeICS(CONFERENCE.name)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(CONFERENCE.websiteUrl || invitationUrl)}
END:VEVENT
END:VCALENDAR`;


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `${slugify(CONFERENCE.shortName)}.ics`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();


  URL.revokeObjectURL(
    url
  );


  announce(
    "تم تنزيل ملف التقويم."
  );

}



/* =========================================================
   ICS HELPERS
========================================================= */

function formatICSDate(date) {

  return date
    .toISOString()
    .replace(
      /[-:]/g,
      ""
    )
    .replace(
      /\.\d{3}Z$/,
      "Z"
    );

}



function createUID() {

  return (
    `${slugify(CONFERENCE.shortName)}` +
    `-${START_DATE.getTime()}` +
    "@focus-field"
  );

}



function escapeICS(value = "") {

  return String(value)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /\n/g,
      "\\n"
    )

    .replace(
      /,/g,
      "\\,"
    )

    .replace(
      /;/g,
      "\\;"
    );

}



/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const data = {

    title:
      CONFERENCE.name,

    text:
      `${CONFERENCE.name} — ${CONFERENCE.tagline}`,

    url:
      getShareUrl()

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );


      announce(
        "تمت مشاركة الدعوة."
      );


      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {
        return;
      }

    }

  }


  await copyInvitationLink();

}



/* =========================================================
   COPY
========================================================= */

async function copyInvitationLink() {

  const url =
    getShareUrl();


  try {

    await navigator.clipboard
      .writeText(
        url
      );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    fallbackCopy(
      url
    );

  }

}



function fallbackCopy(text) {

  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";

  textarea.style.opacity =
    "0";


  document.body.appendChild(
    textarea
  );


  textarea.select();


  try {

    document.execCommand(
      "copy"
    );


    announce(
      "تم نسخ رابط الدعوة."
    );

  } catch (error) {

    announce(
      "تعذر نسخ الرابط تلقائياً."
    );

  }


  textarea.remove();

}



/* =========================================================
   SHARE URL
========================================================= */

function getShareUrl() {

  const custom =
    CONFERENCE.shareUrl?.trim();


  if (custom) {
    return custom;
  }


  return window.location.href;

}



/* =========================================================
   ACTIONS
========================================================= */

function setupActions() {

  elements.calendarButton
    .addEventListener(
      "click",
      downloadCalendar
    );


  elements.shareButton
    .addEventListener(
      "click",
      shareInvitation
    );


  elements.topShareButton
    .addEventListener(
      "click",
      shareInvitation
    );

}



/* =========================================================
   REVEAL
========================================================= */

function setupRevealObserver() {

  const items =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    prefersReducedMotion()
  ) {

    items.forEach(
      item =>
        item.classList.add(
          "is-visible"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              !entry.isIntersecting
            ) {
              return;
            }


            entry.target
              .classList
              .add(
                "is-visible"
              );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -7% 0px"
      }
    );


  items.forEach(
    item =>
      observer.observe(
        item
      )
  );

}



/* =========================================================
   METADATA
========================================================= */

function updateMetadata() {

  document.title =
    CONFERENCE.name;


  const description =
    `${CONFERENCE.name} — ${CONFERENCE.tagline}`;


  updateMeta(
    'meta[name="description"]',
    description
  );


  updateMeta(
    'meta[property="og:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[property="og:description"]',
    CONFERENCE.tagline
  );


  updateMeta(
    'meta[property="og:url"]',
    getShareUrl()
  );


  updateMeta(
    'meta[name="twitter:title"]',
    CONFERENCE.name
  );


  updateMeta(
    'meta[name="twitter:description"]',
    CONFERENCE.tagline
  );

}



function updateMeta(
  selector,
  content
) {

  const element =
    document.querySelector(
      selector
    );


  if (!element) {
    return;
  }


  element.setAttribute(
    "content",
    content
  );

}



/* =========================================================
   STRUCTURED DATA
========================================================= */

function addStructuredData() {

  const data = {

    "@context":
      "https://schema.org",

    "@type":
      "Event",

    name:
      CONFERENCE.name,

    description:
      CONFERENCE.tagline,

    startDate:
      CONFERENCE.startAt,

    endDate:
      CONFERENCE.endAt,

    eventStatus:
      "https://schema.org/EventScheduled",

    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {

      "@type":
        "Place",

      name:
        CONFERENCE.venue,

      address: {

        "@type":
          "PostalAddress",

        addressLocality:
          CONFERENCE.city,

        addressCountry:
          CONFERENCE.country

      }

    },

    organizer: {

      "@type":
        "Organization",

      name:
        CONFERENCE.organizer,

      url:
        CONFERENCE.websiteUrl ||
        undefined

    },

    url:
      getShareUrl()

  };


  const script =
    document.createElement(
      "script"
    );


  script.type =
    "application/ld+json";


  script.textContent =
    JSON.stringify(
      data
    );


  document.head.appendChild(
    script
  );

}



/* =========================================================
   HELPERS
========================================================= */

function formatArabicNumber(number) {

  return new Intl.NumberFormat(
    "ar-IQ",
    {
      useGrouping: false
    }
  ).format(number);

}



function formatArabicTwoDigits(number) {

  const padded =
    String(number)
      .padStart(
        2,
        "0"
      );


  return padded
    .split("")
    .map(
      digit =>
        new Intl.NumberFormat(
          "ar-IQ",
          {
            useGrouping: false
          }
        ).format(
          Number(digit)
        )
    )
    .join("");

}



function clamp(
  value,
  min,
  max
) {

  return Math.min(
    Math.max(
      value,
      min
    ),
    max
  );

}



function slugify(value = "") {

  return String(value)

    .toLowerCase()

    .trim()

    .replace(
      /[^a-z0-9\u0600-\u06ff]+/g,
      "-"
    )

    .replace(
      /^-+|-+$/g,
      ""
    );

}



function escapeHTML(value = "") {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}



function announce(message) {

  elements.statusMessage.textContent =
    "";


  window.setTimeout(
    () => {

      elements.statusMessage.textContent =
        message;

    },
    30
  );

}



function prefersReducedMotion() {

  return window
    .matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    .matches;

}



/* =========================================================
   INIT
========================================================= */

function init() {

  populateConference();

  renderThemes();

  setupFocusInteraction();

  setupActions();

  setupRevealObserver();

  startCountdown();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
