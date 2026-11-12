// Real Astrological & Astronomical Calculation Engine
import { ZODIAC_SIGNS } from '../data/zodiacData.js';

export const GLOBAL_CITIES = [
  // Americas
  { name: 'Honolulu, USA', lat: 21.3069, lng: -157.8583, tz: -10 },
  { name: 'Anchorage, USA', lat: 61.2181, lng: -149.9003, tz: -9 },
  { name: 'Los Angeles, USA', lat: 34.0522, lng: -118.2437, tz: -8 },
  { name: 'San Francisco, USA', lat: 37.7749, lng: -122.4194, tz: -8 },
  { name: 'Seattle, USA', lat: 47.6062, lng: -122.3321, tz: -8 },
  { name: 'Vancouver, Canada', lat: 49.2827, lng: -123.1207, tz: -8 },
  { name: 'Denver, USA', lat: 39.7392, lng: -104.9903, tz: -7 },
  { name: 'Phoenix, USA', lat: 33.4484, lng: -112.0740, tz: -7 },
  { name: 'Chicago, USA', lat: 41.8781, lng: -87.6298, tz: -6 },
  { name: 'Dallas, USA', lat: 32.7767, lng: -96.7970, tz: -6 },
  { name: 'Houston, USA', lat: 29.7604, lng: -95.3698, tz: -6 },
  { name: 'Mexico City, Mexico', lat: 19.4326, lng: -99.1332, tz: -6 },
  { name: 'New York, USA', lat: 40.7128, lng: -74.0060, tz: -5 },
  { name: 'Boston, USA', lat: 42.3601, lng: -71.0589, tz: -5 },
  { name: 'Miami, USA', lat: 25.7617, lng: -80.1918, tz: -5 },
  { name: 'Atlanta, USA', lat: 33.7490, lng: -84.3880, tz: -5 },
  { name: 'Toronto, Canada', lat: 43.6532, lng: -79.3832, tz: -5 },
  { name: 'Montreal, Canada', lat: 45.5017, lng: -73.5673, tz: -5 },
  { name: 'Bogota, Colombia', lat: 4.7110, lng: -74.0721, tz: -5 },
  { name: 'Lima, Peru', lat: -12.0464, lng: -77.0428, tz: -5 },
  { name: 'Caracas, Venezuela', lat: 10.4806, lng: -66.9036, tz: -4 },
  { name: 'Santiago, Chile', lat: -33.4489, lng: -70.6693, tz: -4 },
  { name: 'Buenos Aires, Argentina', lat: -34.6037, lng: -58.3816, tz: -3 },
  { name: 'Sao Paulo, Brazil', lat: -23.5505, lng: -46.6333, tz: -3 },
  { name: 'Rio de Janeiro, Brazil', lat: -22.9068, lng: -43.1729, tz: -3 },

  // Europe & Africa
  { name: 'London, UK', lat: 51.5074, lng: -0.1278, tz: 0 },
  { name: 'Dublin, Ireland', lat: 53.3498, lng: -6.2603, tz: 0 },
  { name: 'Lisbon, Portugal', lat: 38.7223, lng: -9.1393, tz: 0 },
  { name: 'Casablanca, Morocco', lat: 33.5731, lng: -7.5898, tz: 1 },
  { name: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792, tz: 1 },
  { name: 'Paris, France', lat: 48.8566, lng: 2.3522, tz: 1 },
  { name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, tz: 1 },
  { name: 'Rome, Italy', lat: 41.9028, lng: 12.4964, tz: 1 },
  { name: 'Madrid, Spain', lat: 40.4168, lng: -3.7038, tz: 1 },
  { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041, tz: 1 },
  { name: 'Brussels, Belgium', lat: 50.8503, lng: 4.3517, tz: 1 },
  { name: 'Vienna, Austria', lat: 48.2082, lng: 16.3738, tz: 1 },
  { name: 'Zurich, Switzerland', lat: 47.3769, lng: 8.5417, tz: 1 },
  { name: 'Stockholm, Sweden', lat: 59.3293, lng: 18.0686, tz: 1 },
  { name: 'Oslo, Norway', lat: 59.9139, lng: 10.7522, tz: 1 },
  { name: 'Copenhagen, Denmark', lat: 55.6761, lng: 12.5683, tz: 1 },
  { name: 'Warsaw, Poland', lat: 52.2297, lng: 21.0122, tz: 1 },
  { name: 'Prague, Czechia', lat: 50.0755, lng: 14.4378, tz: 1 },
  { name: 'Athens, Greece', lat: 37.9838, lng: 23.7275, tz: 2 },
  { name: 'Helsinki, Finland', lat: 60.1699, lng: 24.9384, tz: 2 },
  { name: 'Bucharest, Romania', lat: 44.4268, lng: 26.1025, tz: 2 },
  { name: 'Kyiv, Ukraine', lat: 50.4501, lng: 30.5234, tz: 2 },
  { name: 'Cairo, Egypt', lat: 30.0444, lng: 31.2357, tz: 2 },
  { name: 'Tel Aviv, Israel', lat: 32.0853, lng: 34.7818, tz: 2 },
  { name: 'Johannesburg, South Africa', lat: -26.2041, lng: 28.0473, tz: 2 },
  { name: 'Istanbul, Turkey', lat: 41.0082, lng: 28.9784, tz: 3 },
  { name: 'Riyadh, Saudi Arabia', lat: 24.7136, lng: 46.6753, tz: 3 },
  { name: 'Nairobi, Kenya', lat: -1.2921, lng: 36.8219, tz: 3 },

  // Middle East & Asia
  { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, tz: 4 },
  { name: 'Baku, Azerbaijan', lat: 40.4093, lng: 49.8671, tz: 4 },
  { name: 'Karachi, Pakistan', lat: 24.8607, lng: 67.0011, tz: 5 },
  { name: 'Tashkent, Uzbekistan', lat: 41.2995, lng: 69.2401, tz: 5 },
  { name: 'Mumbai, India', lat: 19.0760, lng: 72.8777, tz: 5.5 },
  { name: 'Delhi, India', lat: 28.6139, lng: 77.2090, tz: 5.5 },
  { name: 'Bengaluru, India', lat: 12.9716, lng: 77.5946, tz: 5.5 },
  { name: 'Dhaka, Bangladesh', lat: 23.8103, lng: 90.4125, tz: 6 },
  { name: 'Bangkok, Thailand', lat: 13.7563, lng: 100.5018, tz: 7 },
  { name: 'Jakarta, Indonesia', lat: -6.2088, lng: 106.8456, tz: 7 },
  { name: 'Hanoi, Vietnam', lat: 21.0285, lng: 105.8542, tz: 7 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, tz: 8 },
  { name: 'Kuala Lumpur, Malaysia', lat: 3.1390, lng: 101.6869, tz: 8 },
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, tz: 8 },
  { name: 'Taipei, Taiwan', lat: 25.0330, lng: 121.5654, tz: 8 },
  { name: 'Beijing, China', lat: 39.9042, lng: 116.4074, tz: 8 },
  { name: 'Shanghai, China', lat: 31.2304, lng: 121.4737, tz: 8 },
  { name: 'Perth, Australia', lat: -31.9505, lng: 115.8605, tz: 8 },
  { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503, tz: 9 },
  { name: 'Seoul, South Korea', lat: 37.5665, lng: 126.9780, tz: 9 },
  { name: 'Adelaide, Australia', lat: -34.9285, lng: 138.6007, tz: 9.5 },
  { name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093, tz: 10 },
  { name: 'Melbourne, Australia', lat: -37.8136, lng: 144.9631, tz: 10 },
  { name: 'Brisbane, Australia', lat: -27.4698, lng: 153.0251, tz: 10 },
  { name: 'Auckland, New Zealand', lat: -36.8485, lng: 174.7633, tz: 12 }
];

export function getAutoDetectedCity() {
  try {
    const tzMinutes = new Date().getTimezoneOffset();
    const tzHours = -tzMinutes / 60;
    
    // Check if browser timezone name can match city
    const browserTz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const tzLower = browserTz.toLowerCase();

    const matchedByName = GLOBAL_CITIES.find(c => {
      const cityNamePart = c.name.split(',')[0].toLowerCase().trim();
      return tzLower.includes(cityNamePart);
    });

    if (matchedByName) return matchedByName;

    // Fallback: match by exact offset
    const matchedByOffset = GLOBAL_CITIES.find(c => Math.abs(c.tz - tzHours) < 0.1);
    if (matchedByOffset) return matchedByOffset;

    return GLOBAL_CITIES[12]; // Default New York
  } catch (e) {
    return GLOBAL_CITIES[12];
  }
}

function degToRad(d) { return d * Math.PI / 180; }
function radToDeg(r) { return r * 180 / Math.PI; }
function norm360(d) {
  let res = d % 360;
  if (res < 0) res += 360;
  return res;
}

// Convert Calendar date & time to Julian Day
export function getJulianDate(year, month, day, hour = 12, min = 0, tz = 0) {
  const decimalUT = (hour - tz) + min / 60;
  let y = year;
  let m = month;
  let d = day + decimalUT / 24;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + b - 1524.5;
}

// Sun Ecliptic Longitude
export function calculateSun(jd) {
  const T = (jd - 2451545.0) / 36525;
  const L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
  const M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
  const C = (1.914602 - 0.004817 * T) * Math.sin(degToRad(M)) +
            (0.019993 - 0.000101 * T) * Math.sin(degToRad(2 * M)) +
            0.000289 * Math.sin(degToRad(3 * M));
  return norm360(L0 + C);
}

// Moon Ecliptic Longitude with periodic terms
export function calculateMoon(jd) {
  const T = (jd - 2451545.0) / 36525;
  const Lp = norm360(218.3164477 + 481267.88123421 * T);
  const D = norm360(297.8501921 + 445267.1114034 * T);
  const M = norm360(357.5291092 + 35999.0502909 * T);
  const Mp = norm360(134.9633964 + 477198.8675055 * T);
  const F = norm360(93.2720950 + 483202.0175233 * T);

  const l = 6.288774 * Math.sin(degToRad(Mp)) +
            1.274027 * Math.sin(degToRad(2 * D - Mp)) +
            0.658314 * Math.sin(degToRad(2 * D)) +
            0.213618 * Math.sin(degToRad(2 * Mp)) -
            0.185116 * Math.sin(degToRad(M)) -
            0.114332 * Math.sin(degToRad(2 * F)) +
            0.058793 * Math.sin(degToRad(2 * D - 2 * Mp)) +
            0.057066 * Math.sin(degToRad(2 * D - M - Mp)) +
            0.053322 * Math.sin(degToRad(2 * D + Mp)) +
            0.046100 * Math.sin(degToRad(2 * D - M)) -
            0.034728 * Math.sin(degToRad(D));

  return norm360(Lp + l);
}

// Ascendant (Rising Sign) from Local Sidereal Time and Geographic Coordinates
export function calculateAscendant(jd, lat, lng) {
  const T = (jd - 2451545.0) / 36525;
  const gmst = norm360(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - (T * T * T) / 38710000);
  const ramc = norm360(gmst + lng);
  const eps = 23.4392911 - 0.0130042 * T;

  const ramcRad = degToRad(ramc);
  const epsRad = degToRad(eps);
  const latRad = degToRad(lat);

  const y = Math.cos(ramcRad);
  const x = -Math.sin(ramcRad) * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad);

  const ascDeg = radToDeg(Math.atan2(y, x));
  return norm360(ascDeg);
}

// Keplerian orbital elements for geocentric planetary positions
const PLANET_ELEMENTS = {
  Mercury: { a: 0.387098, e: 0.205630, L: 252.2509, w: 77.4561, rateL: 149472.67466, rateW: 0.1594 },
  Venus:   { a: 0.723332, e: 0.006772, L: 181.9798, w: 131.5637, rateL: 58517.81568, rateW: 0.0048 },
  Earth:   { a: 1.000000, e: 0.016709, L: 100.4664, w: 102.9373, rateL: 35999.37286, rateW: 0.3179 },
  Mars:    { a: 1.523679, e: 0.093405, L: 355.4330, w: 336.0602, rateL: 19140.29934, rateW: 0.4439 },
  Jupiter: { a: 5.202603, e: 0.048498, L: 34.3515,  w: 14.3312,  rateL: 3034.90567,  rateW: 0.2156 },
  Saturn:  { a: 9.554909, e: 0.055548, L: 50.0774,  w: 93.0572,  rateL: 1222.11379,  rateW: 0.5470 }
};

function getHeliocentricPos(planet, jd) {
  const T = (jd - 2451545.0) / 36525;
  const p = PLANET_ELEMENTS[planet];
  const L = norm360(p.L + p.rateL * T);
  const w = norm360(p.w + p.rateW * T);
  const M = norm360(L - w);

  let E = degToRad(M);
  const e = p.e;
  const M_rad = degToRad(M);
  for (let i = 0; i < 10; i++) {
    E = E - (E - e * Math.sin(E) - M_rad) / (1 - e * Math.cos(E));
  }

  const x_prime = p.a * (Math.cos(E) - e);
  const y_prime = p.a * Math.sqrt(1 - e * e) * Math.sin(E);

  const w_rad = degToRad(w);
  const x = x_prime * Math.cos(w_rad) - y_prime * Math.sin(w_rad);
  const y = x_prime * Math.sin(w_rad) + y_prime * Math.cos(w_rad);

  return { x, y };
}

export function calculateGeocentricPlanet(planet, jd) {
  const pPos = getHeliocentricPos(planet, jd);
  const ePos = getHeliocentricPos('Earth', jd);
  const dx = pPos.x - ePos.x;
  const dy = pPos.y - ePos.y;
  return norm360(radToDeg(Math.atan2(dy, dx)));
}

// Convert absolute degree (0-360) to Sign and formatted degree
export function degreeToZodiac(deg) {
  const normalized = norm360(deg);
  const signIndex = Math.floor(normalized / 30);
  const degreeInSign = Math.floor(normalized % 30);
  const minutesInSign = Math.floor((normalized % 1) * 60);

  const sign = ZODIAC_SIGNS[signIndex] || ZODIAC_SIGNS[0];

  return {
    signIndex,
    sign,
    signId: sign.id,
    signName: sign.name,
    symbol: sign.symbol,
    element: sign.element,
    modality: sign.modality,
    colorAccent: sign.colorAccent,
    degreeInSign,
    minutesInSign,
    totalDegree: normalized,
    formatted: `${degreeInSign}°${minutesInSign < 10 ? '0' : ''}${minutesInSign}' ${sign.name} ${sign.symbol}`
  };
}

// Full Natal Chart Calculation from birth details
export function calculateFullNatalChart({
  name = 'Astral Traveler',
  birthDate = '1998-10-24',
  birthTime = '14:30',
  timeUnknown = false,
  cityName = 'New York, USA',
  customLat = null,
  customLng = null,
  customTz = null
}) {
  const [yearStr, monthStr, dayStr] = birthDate.split('-');
  const year = parseInt(yearStr, 10) || 1998;
  const month = parseInt(monthStr, 10) || 10;
  const day = parseInt(dayStr, 10) || 24;

  let hour = 12;
  let minute = 0;
  if (!timeUnknown && birthTime) {
    const [h, m] = birthTime.split(':');
    hour = parseInt(h, 10) || 12;
    minute = parseInt(m, 10) || 0;
  }

  const selectedCity = GLOBAL_CITIES.find(c => c.name === cityName) || GLOBAL_CITIES[0];
  const lat = customLat !== null ? customLat : selectedCity.lat;
  const lng = customLng !== null ? customLng : selectedCity.lng;
  const tz = customTz !== null ? customTz : selectedCity.tz;

  const jd = getJulianDate(year, month, day, hour, minute, tz);

  const sunDeg = calculateSun(jd);
  const moonDeg = calculateMoon(jd);
  const ascDeg = calculateAscendant(jd, lat, lng);
  const mercuryDeg = calculateGeocentricPlanet('Mercury', jd);
  const venusDeg = calculateGeocentricPlanet('Venus', jd);
  const marsDeg = calculateGeocentricPlanet('Mars', jd);
  const jupiterDeg = calculateGeocentricPlanet('Jupiter', jd);
  const saturnDeg = calculateGeocentricPlanet('Saturn', jd);

  const sun = degreeToZodiac(sunDeg);
  const moon = degreeToZodiac(moonDeg);
  const rising = degreeToZodiac(ascDeg);
  const mercury = degreeToZodiac(mercuryDeg);
  const venus = degreeToZodiac(venusDeg);
  const mars = degreeToZodiac(marsDeg);
  const jupiter = degreeToZodiac(jupiterDeg);
  const saturn = degreeToZodiac(saturnDeg);

  // Compute 12 Whole Sign Houses from Rising Sign
  const houses = [];
  for (let i = 0; i < 12; i++) {
    const houseSignIndex = (rising.signIndex + i) % 12;
    const houseSign = ZODIAC_SIGNS[houseSignIndex];
    houses.push({
      houseNumber: i + 1,
      sign: houseSign,
      signId: houseSign.id,
      signName: houseSign.name,
      symbol: houseSign.symbol,
      element: houseSign.element,
      colorAccent: houseSign.colorAccent
    });
  }

  // Calculate Elemental and Modality percentages across key placements
  const placements = [sun, moon, rising, mercury, venus, mars, jupiter, saturn];
  const elementCounts = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
  const modalityCounts = { Cardinal: 0, Fixed: 0, Mutable: 0 };

  placements.forEach(p => {
    elementCounts[p.element] = (elementCounts[p.element] || 0) + 1;
    modalityCounts[p.modality] = (modalityCounts[p.modality] || 0) + 1;
  });

  const total = placements.length;
  const elementPercentages = {
    Fire: Math.round((elementCounts.Fire / total) * 100),
    Earth: Math.round((elementCounts.Earth / total) * 100),
    Air: Math.round((elementCounts.Air / total) * 100),
    Water: Math.round((elementCounts.Water / total) * 100),
  };

  const modalityPercentages = {
    Cardinal: Math.round((modalityCounts.Cardinal / total) * 100),
    Fixed: Math.round((modalityCounts.Fixed / total) * 100),
    Mutable: Math.round((modalityCounts.Mutable / total) * 100),
  };

  return {
    name,
    birthDate,
    birthTime: timeUnknown ? '12:00 (Time Unknown)' : birthTime,
    timeUnknown,
    cityName,
    coordinates: { lat, lng, tz },
    sun,
    moon,
    rising,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    houses,
    elementPercentages,
    modalityPercentages,
    chartRuler: rising.sign.rulingPlanet,
    calculatedAt: new Date().toISOString()
  };
}

// Multi-planet true Synastry calculation between two real charts
export function calculateTrueSynastry(chartA, chartB) {
  if (!chartA || !chartB) return null;

  const ASPECT_DEFINITIONS = [
    { deg: 0, orb: 10, name: 'Conjunction (0°)', dynamic: 'Telepathic Resonance & Shared Core Identity', base: 94 },
    { deg: 60, orb: 6, name: 'Sextile (60°)', dynamic: 'Creative Spark & Mutual Inspiration', base: 90 },
    { deg: 90, orb: 8, name: 'Square (90°)', dynamic: 'Dynamic Growth & Magnetic Friction', base: 74 },
    { deg: 120, orb: 8, name: 'Trine (120°)', dynamic: 'Divine Elemental Harmony', base: 97 },
    { deg: 150, orb: 4, name: 'Quincunx (150°)', dynamic: 'Karmic Adjustment & Perspective Shift', base: 70 },
    { deg: 180, orb: 10, name: 'Opposition (180°)', dynamic: 'Opposites Attract & Sacred Polarity', base: 88 }
  ];

  function getAngleScore(deg1, deg2) {
    const diff = Math.min(Math.abs(deg1 - deg2), 360 - Math.abs(deg1 - deg2));
    
    // Check if within orb of any classical aspect
    let matchedAspect = null;
    let minDistance = 999;

    for (const asp of ASPECT_DEFINITIONS) {
      const dist = Math.abs(diff - asp.deg);
      if (dist <= asp.orb && dist < minDistance) {
        minDistance = dist;
        matchedAspect = asp;
      }
    }

    if (matchedAspect) {
      // Linear penalty based on distance within orb
      const orbPenalty = Math.round((minDistance / matchedAspect.orb) * 10);
      return {
        aspect: `${matchedAspect.name} (orb ${Math.round(minDistance * 10) / 10}°)`,
        dynamic: matchedAspect.dynamic,
        score: Math.max(matchedAspect.base - orbPenalty, 65),
        exactDiff: Math.round(diff * 10) / 10,
        isMajorAspect: true
      };
    }

    // Unaspected / Ambient angle (e.g. 24°, 45°, 75°, etc.)
    return {
      aspect: `Ambient Alignment (${Math.round(diff * 10) / 10}°)`,
      dynamic: 'Independent Orbit & Subtle Harmony',
      score: 75,
      exactDiff: Math.round(diff * 10) / 10,
      isMajorAspect: false
    };
  }

  const sunSun = getAngleScore(chartA.sun.totalDegree, chartB.sun.totalDegree);
  const moonMoon = getAngleScore(chartA.moon.totalDegree, chartB.moon.totalDegree);
  const sunMoon = getAngleScore(chartA.sun.totalDegree, chartB.moon.totalDegree);
  const venusMars = getAngleScore(chartA.venus.totalDegree, chartB.mars.totalDegree);
  const risingRising = getAngleScore(chartA.rising.totalDegree, chartB.rising.totalDegree);

  // Overall synergy weighted by astrological importance
  const overall = Math.round(
    sunSun.score * 0.25 +
    moonMoon.score * 0.25 +
    sunMoon.score * 0.20 +
    venusMars.score * 0.20 +
    risingRising.score * 0.10
  );

  return {
    chartA,
    chartB,
    overall,
    sunSun,
    moonMoon,
    sunMoon,
    venusMars,
    risingRising,
    soulmateScore: Math.round((sunMoon.score + moonMoon.score) / 2),
    passionScore: venusMars.score,
    intellectScore: Math.round((chartA.mercury.sign.element === chartB.mercury.sign.element ? 95 : 82)),
    elementalSynthesis: `${chartA.sun.element} + ${chartB.sun.element} Solar Matrix with ${chartA.moon.element} & ${chartB.moon.element} Lunar Tides.`
  };
}

// LocalStorage Persistence Helpers
const STORAGE_KEY_USER_CHART = 'stargaze_user_natal_chart';
const STORAGE_KEY_FRIENDS = 'stargaze_friend_natal_charts';
const LEGACY_STORAGE_USER = 'aethel_user_natal_chart';
const LEGACY_STORAGE_FRIENDS = 'aethel_friend_natal_charts';

export function saveUserChart(chart) {
  try {
    localStorage.setItem(STORAGE_KEY_USER_CHART, JSON.stringify(chart));
  } catch (e) {
    console.error('Failed to save user chart', e);
  }
}

export function loadUserChart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER_CHART) || localStorage.getItem(LEGACY_STORAGE_USER);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveFriendsCharts(friends) {
  try {
    localStorage.setItem(STORAGE_KEY_FRIENDS, JSON.stringify(friends));
  } catch (e) {
    console.error('Failed to save friend charts', e);
  }
}

export function loadFriendsCharts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FRIENDS) || localStorage.getItem(LEGACY_STORAGE_FRIENDS);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

// Realtime Sky & Transits Calculation
export function getRealtimeSkyPositions(date = new Date()) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hour = date.getUTCHours();
  const minute = date.getUTCMinutes();

  const jd = getJulianDate(year, month, day, hour, minute, 0);

  const sunDeg = calculateSun(jd);
  const moonDeg = calculateMoon(jd);
  const mercuryDeg = calculateGeocentricPlanet('Mercury', jd);
  const venusDeg = calculateGeocentricPlanet('Venus', jd);
  const marsDeg = calculateGeocentricPlanet('Mars', jd);
  const jupiterDeg = calculateGeocentricPlanet('Jupiter', jd);
  const saturnDeg = calculateGeocentricPlanet('Saturn', jd);

  const sun = degreeToZodiac(sunDeg);
  const moon = degreeToZodiac(moonDeg);
  const mercury = degreeToZodiac(mercuryDeg);
  const venus = degreeToZodiac(venusDeg);
  const mars = degreeToZodiac(marsDeg);
  const jupiter = degreeToZodiac(jupiterDeg);
  const saturn = degreeToZodiac(saturnDeg);

  // Calculate Moon Phase & illumination
  const phaseAngle = norm360(moonDeg - sunDeg);
  const illumination = Math.round((1 - Math.cos(degToRad(phaseAngle))) / 2 * 100);

  let phaseName = 'New Moon';
  if (phaseAngle >= 22.5 && phaseAngle < 67.5) phaseName = 'Waxing Crescent';
  else if (phaseAngle >= 67.5 && phaseAngle < 112.5) phaseName = 'First Quarter';
  else if (phaseAngle >= 112.5 && phaseAngle < 157.5) phaseName = 'Waxing Gibbous';
  else if (phaseAngle >= 157.5 && phaseAngle < 202.5) phaseName = 'Full Moon';
  else if (phaseAngle >= 202.5 && phaseAngle < 247.5) phaseName = 'Waning Gibbous';
  else if (phaseAngle >= 247.5 && phaseAngle < 292.5) phaseName = 'Last Quarter';
  else if (phaseAngle >= 292.5 && phaseAngle < 337.5) phaseName = 'Waning Crescent';

  const season = `${sun.sign.name} Season`;

  return {
    jd,
    timestamp: date.toISOString(),
    formattedDate: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
    season,
    moonPhase: {
      phaseName,
      illumination,
      angle: Math.round(phaseAngle)
    },
    planets: {
      sun,
      moon,
      mercury,
      venus,
      mars,
      jupiter,
      saturn
    }
  };
}

// Fetch live daily horoscope from free public API with multi-endpoint fallback
export async function fetchLiveDailyHoroscope(signName) {
  if (!signName) return null;
  const cleanSign = signName.toLowerCase().trim();

  // 1. Try Endpoint 1: horoscope-app-api
  try {
    const controller1 = new AbortController();
    const timeout1 = setTimeout(() => controller1.abort(), 3500);
    const res1 = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${cleanSign}&day=TODAY`, {
      signal: controller1.signal
    });
    clearTimeout(timeout1);

    if (res1.ok) {
      const json1 = await res1.json();
      if (json1 && json1.data && json1.data.horoscope) {
        return {
          success: true,
          date: json1.data.date,
          horoscope: json1.data.horoscope,
          sign: json1.data.sign
        };
      }
    }
  } catch (e) {
    // Provider 1 unreachable or blocked
  }

  // 2. Try Endpoint 2: ohmanda API
  try {
    const controller2 = new AbortController();
    const timeout2 = setTimeout(() => controller2.abort(), 3500);
    const res2 = await fetch(`https://ohmanda.com/api/horoscope/${cleanSign}/`, {
      signal: controller2.signal
    });
    clearTimeout(timeout2);

    if (res2.ok) {
      const json2 = await res2.json();
      if (json2 && json2.horoscope) {
        return {
          success: true,
          date: json2.date || 'Today',
          horoscope: json2.horoscope,
          sign: json2.sign || signName
        };
      }
    }
  } catch (e) {
    // Provider 2 unreachable or blocked
  }

  // 3. Astronomical Transit Synthesis Fallback (guaranteed, zero-downtime, offline-ready)
  const now = new Date();
  const sky = getRealtimeSkyPositions(now);
  const transitMoon = sky.planets.moon;
  const formattedDate = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

  const signProfile = ZODIAC_SIGNS.find(s => s.id === cleanSign || s.name.toLowerCase() === cleanSign) || ZODIAC_SIGNS[0];

  const syntheticHoroscope = `Under today's planetary transits in ${sky.season}, ${signProfile.name} is attuned to the ${sky.moonPhase.phaseName} in ${transitMoon.sign.name}. With ruling planet ${signProfile.rulingPlanet} anchoring your focus, lean into your core motto "${signProfile.motto}". Direct your strength in ${signProfile.superpowers[0].toLowerCase()} toward high-priority tasks, create calm boundaries against unnecessary noise, and practice intentional patience as current celestial cycles unfold.`;

  return {
    success: true,
    date: formattedDate,
    horoscope: syntheticHoroscope,
    sign: signProfile.name
  };
}

// Synthesize personal daily prediction based on Astral Card and current Sky transits
export function generateAstralDailyPrediction(chart, liveHoroscope = null) {
  if (!chart) return null;
  const now = new Date();
  const realtimeSky = getRealtimeSkyPositions(now);

  const transitSun = realtimeSky.planets.sun;
  const transitMoon = realtimeSky.planets.moon;

  // Compare Transit Moon with Natal Sun & Moon
  const natalSunDeg = chart.sun?.totalDegree ?? 0;
  const natalMoonDeg = chart.moon?.totalDegree ?? 0;

  const sunDiff = Math.min(Math.abs(transitMoon.totalDegree - natalSunDeg), 360 - Math.abs(transitMoon.totalDegree - natalSunDeg));
  const moonDiff = Math.min(Math.abs(transitMoon.totalDegree - natalMoonDeg), 360 - Math.abs(transitMoon.totalDegree - natalMoonDeg));

  // Determine transit aspect relationship
  let transitRelationship = 'Ambient Lunar Flow';
  let harmonyScore = 85;

  if (sunDiff <= 10 || moonDiff <= 10) {
    transitRelationship = 'Conjunction • Heightened Emotional Resonance';
    harmonyScore = 96;
  } else if (Math.abs(sunDiff - 120) <= 8 || Math.abs(moonDiff - 120) <= 8) {
    transitRelationship = 'Trine • Flow State & Ease of Expression';
    harmonyScore = 94;
  } else if (Math.abs(sunDiff - 60) <= 6 || Math.abs(moonDiff - 60) <= 6) {
    transitRelationship = 'Sextile • Opportunities for Collaboration';
    harmonyScore = 90;
  } else if (Math.abs(sunDiff - 90) <= 8 || Math.abs(moonDiff - 90) <= 8) {
    transitRelationship = 'Square • Motivational Friction & Breakthroughs';
    harmonyScore = 78;
  } else if (Math.abs(sunDiff - 180) <= 8 || Math.abs(moonDiff - 180) <= 8) {
    transitRelationship = 'Opposition • Clarity Across Polarities';
    harmonyScore = 82;
  }

  const sunSignName = chart.sun?.sign?.name || chart.sun?.signName || 'Aries';
  const moonSignName = chart.moon?.sign?.name || chart.moon?.signName || 'Leo';
  const risingSignName = chart.rising?.sign?.name || chart.rising?.signName || 'Sagittarius';

  const elements = chart.elementPercentages || { Fire: 25, Earth: 25, Air: 25, Water: 25 };
  let primaryElement = 'Fire';
  let maxVal = -1;
  for (const [el, val] of Object.entries(elements)) {
    if (val > maxVal) {
      maxVal = val;
      primaryElement = el;
    }
  }

  const elementAdviceMap = {
    Fire: 'Channel creative impulses into one meaningful priority before initiating new ventures.',
    Earth: 'Take practical, tangible steps and resist rushing decisions that require steady pacing.',
    Air: 'Articulate thoughts objectively, take time away from screen noise, and verify details.',
    Water: 'Protect your emotional bandwidth and trust your subtle intuitive compass today.'
  };

  return {
    date: now.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }),
    isoDate: now.toISOString().split('T')[0],
    harmonyScore,
    transitRelationship,
    currentSky: {
      season: realtimeSky.season,
      moonPhase: realtimeSky.moonPhase.phaseName,
      moonIllumination: realtimeSky.moonPhase.illumination,
      moonSign: transitMoon.sign.name
    },
    insights: {
      solarMission: `With your Sun in ${sunSignName} illuminated by ${realtimeSky.season}, your core focus is on purposeful clarity and aligning with what sustains your integrity.`,
      lunarMood: `As the ${realtimeSky.moonPhase.phaseName} moves through ${transitMoon.sign.name}, your inner ${moonSignName} Moon asks for thoughtful discernment and balanced emotional boundaries.`,
      outerNavigation: `Through your ${risingSignName} Rising, lead with steady confidence in conversation and collaborative efforts.`,
      elementAdvice: elementAdviceMap[primaryElement] || elementAdviceMap.Fire
    },
    liveHoroscope: liveHoroscope ? liveHoroscope.horoscope : null
  };
}
