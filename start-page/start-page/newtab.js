/* ─────────────────────────────────────────────────────────────
   Start Page · newtab.js
   Copyright (c) 2025 Whittfield Holmes. MIT License.
   ─────────────────────────────────────────────────────────────  */

'use strict';

// ─── Constants ───────────────────────────────────────────────────────────────

const SWATCHES = [
  '#e8c97a', '#7ec8e3', '#a8e6cf', '#f4a9c4', '#ce93d8', '#80deea',
  '#ffcc80', '#ef9a9a', '#90caf9', '#a5d6a7', '#ffe082', '#b0bec5',
];

const SEARCH_ENGINES = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=%s' },
  { id: 'duckduckgo', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=%s' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=%s' },
  { id: 'brave', name: 'Brave Search', url: 'https://search.brave.com/search?q=%s' },
];

const DEFAULT_GROUP_IDS = { work: 'work', personal: 'personal' };

const DEFAULT_GROUPS = [
  { id: DEFAULT_GROUP_IDS.work, name: 'Work', order: 0 },
  { id: DEFAULT_GROUP_IDS.personal, name: 'Personal', order: 1 },
];

// Default shortcuts with groupId and order (fill="currentColor" SVGs)
const DEFAULT_SHORTCUTS = (() => {
  const work = [
    { name: 'GitHub', url: 'https://github.com', color: '#b0bec5', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' },
    { name: 'Linear', url: 'https://linear.app', color: '#90caf9', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 14.103l9.897 9.897c-5.208-.928-9.208-5.095-9.897-9.897zm0-1.932C.182 6.065 5.065 1.181 11.172 0L0 11.172v.999zm13.066 11.8L.029 11.935C.558 5.5 5.5.558 11.935.03L23.97 12.066c-.529 6.435-5.47 11.376-11.904 11.905zM24 11.172L12.828 0C18.935.181 23.818 5.064 24 11.172zm-1.897 2.931L9.897 1.897C14.699 2.586 18.866 6.587 19.794 11.795l-10.2 10.2c5.207-.928 9.209-5.094 9.897-9.897l.001.004.611.101z"/></svg>' },
    { name: 'Notion', url: 'https://notion.so', color: '#f0eff7', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>' },
    { name: 'Figma', url: 'https://figma.com', color: '#ce93d8', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.001 22c2.208 0 4-1.792 4-4v-4h-4c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-12h-4c-2.208 0-4 1.792-4 4s1.792 4 4 4h4v-8zM8.001 2C5.793 2 4.001 3.792 4.001 6s1.792 4 4 4h4V6c0-2.208-1.792-4-4-4zm8 0h-4v8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4zm0 10h-4v4c0 2.208 1.792 4 4 4s4-1.792 4-4-1.792-4-4-4z"/></svg>' },
    { name: 'Vercel', url: 'https://vercel.com', color: '#f0eff7', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>' },
  ];
  const personal = [
    { name: 'Gmail', url: 'https://mail.google.com', color: '#ef9a9a', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>' },
    { name: 'YouTube', url: 'https://youtube.com', color: '#ef9a9a', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
    { name: 'Anthropic', url: 'https://claude.ai', color: '#e8c97a', svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.738 3h-2.553L6.5 21h2.695l1.307-3.905h5.993L17.808 21H20.5zm-3.634 11.703 2.175-6.504 2.16 6.504h-4.335zM9.262 3H6.71L.5 21h2.694l1.307-3.905h5.993L11.8 21h2.694z"/></svg>' },
  ];
  const out = [];
  work.forEach((s, i) => out.push({ id: uid(), groupId: DEFAULT_GROUP_IDS.work, order: i, ...s }));
  personal.forEach((s, i) => out.push({ id: uid(), groupId: DEFAULT_GROUP_IDS.personal, order: i, ...s }));
  return out;
})();

// ─── State ────────────────────────────────────────────────────────────────────

let shortcuts = [];
let groups   = [];
let settings = { searchEngine: 'google', theme: 'system' };
let editingId = null;
let editingGroupId = null;

// ─── DOM ──────────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

const groupsContainer = $('groupsContainer');
const addBtn          = $('addBtn');
const addGroupBtn     = $('addGroupBtn');
const overlay         = $('overlay');
const closeBtn        = $('closeBtn');
const cancelBtn       = $('cancelBtn');
const saveBtn         = $('saveBtn');
const deleteBtn       = $('deleteBtn');
const modalHeading    = $('modalHeading');
const fName           = $('fName');
const fUrl            = $('fUrl');
const fColor          = $('fColor');
const fSvg            = $('fSvg');
const fGroup          = $('fGroup');
const iconPreview     = $('iconPreview');
const swatchesEl      = $('swatches');
const searchEngineEl  = $('searchEngine');
const groupOverlay    = $('groupOverlay');
const groupCloseBtn   = $('groupCloseBtn');
const groupCancelBtn = $('groupCancelBtn');
const groupSaveBtn    = $('groupSaveBtn');
const groupDeleteBtn  = $('groupDeleteBtn');
const fGroupName      = $('fGroupName');
const groupModalHeading = $('groupModalHeading');
const themeSelect       = $('themeSelect');
const backupBtn         = $('backupBtn');
const restoreBtn        = $('restoreBtn');
const restoreInput      = $('restoreInput');
const notesText         = $('notesText');
const notesSection      = $('notesSection');
const notesToggle       = $('notesToggle');
const weatherAnimToggle = $('weatherAnimToggle');
const weatherAnimToggleFixed = $('weatherAnimToggleFixed');
const weatherAnimations = $('weatherAnimations');
const notesContent       = $('notesContent');
const weatherBadge      = $('weatherBadge');
const weatherIcon       = $('weatherIcon');
const weatherTemp       = $('weatherTemp');
const weatherDesc       = $('weatherDesc');
const logoWrap          = $('logoWrap');
const logoEditBtn       = $('logoEditBtn');
const logoOverlay       = $('logoOverlay');
const logoCloseBtn      = $('logoCloseBtn');
const logoCancelBtn     = $('logoCancelBtn');
const logoSaveBtn       = $('logoSaveBtn');
const logoClearBtn      = $('logoClearBtn');
const fLogoSvg          = $('fLogoSvg');
const logoPreview       = $('logoPreview');
const bgSlideshow       = $('bgSlideshow');
const bgEditBtn         = $('bgEditBtn');
const bgOverlay         = $('bgOverlay');
const bgCloseBtn        = $('bgCloseBtn');
const bgCancelBtn       = $('bgCancelBtn');
const bgSaveBtn         = $('bgSaveBtn');
const bgClearBtn        = $('bgClearBtn');
const bgImageInput      = $('bgImageInput');
const bgAddBtn          = $('bgAddBtn');
const bgImageList       = $('bgImageList');
const bgTransition       = $('bgTransition');
const bgDuration        = $('bgDuration');
const bgTransitionSpeed = $('bgTransitionSpeed');
const bgUnsplashBtn      = $('bgUnsplashBtn');
const unsplashOverlay    = $('unsplashOverlay');
const unsplashCloseBtn   = $('unsplashCloseBtn');
const unsplashCancelBtn  = $('unsplashCancelBtn');
const unsplashSearch     = $('unsplashSearch');
const unsplashSearchBtn  = $('unsplashSearchBtn');
const unsplashGrid       = $('unsplashGrid');
const unsplashLoading    = $('unsplashLoading');
const unsplashError      = $('unsplashError');
const unsplashApiKeyInput = $('unsplashApiKey');
const unsplashApiKeySave = $('unsplashApiKeySave');
const photoCredit         = $('photoCredit');
const photoCreditAuthor   = $('photoCreditAuthor');
const photoCreditPhotoPage = $('photoCreditPhotoPage');

const LOGO_STORAGE_KEY = 'logoSvg';
const BG_STORAGE_KEY = 'bgSlideshow';
const BG_DEFAULT_DURATION = 8;
const BG_DEFAULT_TRANSITION = 'fade';
const BG_DEFAULT_TRANSITION_SPEED = 2;
const UNSPLASH_API_KEY_STORAGE_KEY = 'unsplashApiKey';
const UNSPLASH_API_BASE = 'https://api.unsplash.com';

/**
 * Unsplash API application screenshot: set to `true`, reload the extension, open a new tab,
 * capture your screenshot, then set back to `false`. Uses unsplash-demo-screenshot.png + credit.
 */
const UNSPLASH_SCREENSHOT_DEMO = false;

const UNSPLASH_DEMO_ATTRIBUTION = {
  name: 'Martina Nette',
  username: 'dalmartina',
  link: 'https://unsplash.com/@dalmartina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  photoPageUrl: 'https://unsplash.com/photos/misty-evergreen-forest-on-a-foggy-day-uBjBr9CvNiw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
};

// ─── Weather (Open-Meteo, no API key) ─────────────────────────────────────────
const WEATHER_CACHE_KEY = 'weatherCache';
const WEATHER_CACHE_TTL_MS = 30 * 60 * 1000; // 30 min

const WMO_TO_THEME = {
  0: 'clear',
  1: 'partly-cloudy', 2: 'partly-cloudy', 3: 'cloudy',
  45: 'fog', 48: 'fog',
  51: 'rain', 53: 'rain', 55: 'rain', 56: 'rain', 57: 'rain',
  61: 'rain', 63: 'rain', 65: 'rain', 66: 'rain', 67: 'rain',
  71: 'snow', 73: 'snow', 75: 'snow', 77: 'snow',
  80: 'rain', 81: 'rain', 82: 'rain',
  85: 'snow', 86: 'snow',
  95: 'storm', 96: 'storm', 99: 'storm',
};

// Weather icons: one per theme, driven by Open-Meteo WMO code → theme. Clear, recognizable shapes.
const WEATHER_ICONS = {
  clear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 1v2.5M12 20.5V23M3 12h2.5M18.5 12H21M5.64 5.64l1.77 1.77M16.59 16.59l1.77 1.77M5.64 18.36l1.77-1.77M16.59 7.41l1.77-1.77"/></svg>',
  'partly-cloudy': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="9" r="2.8"/><path d="M8 4v2M8 14v1.5M4.2 9H6M10 9h1.8M5.5 6.2l1.2 1.2M10.3 11.5l1.2 1.2M5.5 11.8l1.2-1.2M10.3 6.5l1.2-1.2"/><path d="M18 13.5a3.5 3.5 0 0 0-7 0c0 .6.3 1.2.8 1.5H18a1.5 1.5 0 0 0 0-3z" fill="currentColor" fill-opacity="0.15" stroke="currentColor"/></svg>',
  cloudy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M19 14a4 4 0 0 0-7.2-2.4A4 4 0 1 0 8 16h11a2 2 0 0 0 0-4z"/></svg>',
  fog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 13h16M4 18h14"/></svg>',
  rain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M19 14a4 4 0 0 0-7.2-2.4A4 4 0 1 0 8 16h11a2 2 0 0 0 0-4z"/><path d="M8 19v2M12 19v2M16 19v2M10 21v-3M14 21v-3"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M19 14a4 4 0 0 0-7.2-2.4A4 4 0 1 0 8 16h11a2 2 0 0 0 0-4z"/><path d="M12 17v1.5M12 15.5l-1 1M12 15.5l1 1M12 18.5l-1-1M12 18.5l1-1M10.5 17h1M14.5 17h1"/></svg>',
  storm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14a4 4 0 0 0-7.2-2.4A4 4 0 1 0 8 16h11a2 2 0 0 0 0-4z"/><path d="M13 11l-2 3h2l-2 3" stroke-linejoin="miter"/></svg>',
};

const WEATHER_LABELS = {
  clear: 'Clear',
  'partly-cloudy': 'Partly cloudy',
  cloudy: 'Cloudy',
  fog: 'Fog',
  rain: 'Rain',
  snow: 'Snow',
  storm: 'Storm',
};

// ─── Bootstrap ───────────────────────────────────────────────────────────────

async function init() {
  renderSwatches();
  startClock();
  updateMeta();
  updateCopyrightYear();

  try {
    const result = await chrome.storage.local.get(['shortcuts', 'groups', 'settings']);
    groups = result.groups?.length ? result.groups : DEFAULT_GROUPS;
    const stored = result.settings;
    settings = {
      searchEngine: typeof stored?.searchEngine === 'string' ? stored.searchEngine : 'google',
      theme: ['dark', 'light', 'system'].includes(stored?.theme) ? stored.theme : 'system',
    };
    shortcuts = result.shortcuts?.length ? result.shortcuts : DEFAULT_SHORTCUTS;

    migrateLegacyShortcuts();
    if (!result.groups?.length || !result.shortcuts?.length) persist();
  } catch {
    groups = DEFAULT_GROUPS.slice();
    shortcuts = DEFAULT_SHORTCUTS.slice();
  }

  applyTheme();
  renderSearchEngineOptions();
  renderThemeSelect();
  await loadLogo();
  await loadNotes();
  await loadNotesVisibility();
  await loadWeatherAnimEnabled();
  await loadWeatherFromCache();
  loadWeather();
  await loadUnsplashApiKey();
  await loadBackgroundSlideshow();
  if (UNSPLASH_SCREENSHOT_DEMO) {
    applyUnsplashScreenshotDemo();
  }
  renderGroups();
  bindEvents();
  bindGroupModalEvents();
  bindNotesEvents();
  bindLogoEvents();
  bindBackgroundEvents();
  bindWeatherAnimEvents();
}

function applyTheme() {
  const theme = settings.theme || 'system';
  const root = document.documentElement;
  if (theme === 'system') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

function renderThemeSelect() {
  themeSelect.value = settings.theme || 'system';
}

// ─── Logo ───────────────────────────────────────────────────────────────────

let logoSvg = '';

async function loadLogo() {
  try {
    const result = await chrome.storage.local.get([LOGO_STORAGE_KEY]);
    logoSvg = result[LOGO_STORAGE_KEY] || '';
    renderLogo();
  } catch { /* dev */ }
}

function renderLogo() {
  if (!logoWrap) return;
  if (logoSvg.trim()) {
    logoWrap.innerHTML = sanitizeSvg(logoSvg);
    logoWrap.style.display = '';
  } else {
    logoWrap.innerHTML = '';
    logoWrap.style.display = 'none';
  }
}

async function persistLogo() {
  try {
    await chrome.storage.local.set({ [LOGO_STORAGE_KEY]: logoSvg });
  } catch { /* dev */ }
}

function openLogoModal() {
  fLogoSvg.value = logoSvg;
  updateLogoPreview();
  logoOverlay.classList.add('open');
  setTimeout(() => fLogoSvg.focus(), 60);
}

function closeLogoModal() {
  logoOverlay.classList.remove('open');
}

function updateLogoPreview() {
  if (!logoPreview) return;
  const raw = fLogoSvg.value.trim();
  if (raw) {
    logoPreview.innerHTML = sanitizeSvg(raw);
    logoPreview.style.color = 'var(--text)';
    const svg = logoPreview.querySelector('svg');
    if (svg) {
      svg.style.maxWidth = '100%';
      svg.style.maxHeight = '100%';
    }
  } else {
    logoPreview.innerHTML = '';
  }
}

async function saveLogo() {
  logoSvg = fLogoSvg.value.trim();
  await persistLogo();
  renderLogo();
  closeLogoModal();
}

async function clearLogo() {
  logoSvg = '';
  fLogoSvg.value = '';
  await persistLogo();
  renderLogo();
  closeLogoModal();
}

function bindLogoEvents() {
  if (logoEditBtn) logoEditBtn.addEventListener('click', openLogoModal);
  if (logoCloseBtn) logoCloseBtn.addEventListener('click', closeLogoModal);
  if (logoCancelBtn) logoCancelBtn.addEventListener('click', closeLogoModal);
  if (logoSaveBtn) logoSaveBtn.addEventListener('click', saveLogo);
  if (logoClearBtn) logoClearBtn.addEventListener('click', clearLogo);
  if (fLogoSvg) fLogoSvg.addEventListener('input', updateLogoPreview);
  if (logoOverlay) logoOverlay.addEventListener('click', (e) => { if (e.target === logoOverlay) closeLogoModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && logoOverlay && logoOverlay.classList.contains('open')) closeLogoModal();
  });
}

// ─── Background Slideshow ───────────────────────────────────────────────────

let bgSlideshowData = {
  images: [], // Array of { url, attribution: { name, username, link } }
  transition: BG_DEFAULT_TRANSITION,
  duration: BG_DEFAULT_DURATION,
  transitionSpeed: BG_DEFAULT_TRANSITION_SPEED,
};
let bgSlideshowInterval = null;
let bgCurrentIndex = 0;
let bgEditingImages = []; // Array of { url, attribution }

async function loadBackgroundSlideshow() {
  try {
    const result = await chrome.storage.local.get([BG_STORAGE_KEY]);
    const stored = result[BG_STORAGE_KEY];
    if (stored && Array.isArray(stored.images)) {
      // Convert old string format to new object format for backward compatibility
      const images = stored.images.map(item => {
        if (typeof item === 'string') {
          return { url: item, attribution: null };
        }
        return item;
      });
      bgSlideshowData = {
        images,
        transition: stored.transition || BG_DEFAULT_TRANSITION,
        duration: stored.duration || BG_DEFAULT_DURATION,
        transitionSpeed: stored.transitionSpeed || BG_DEFAULT_TRANSITION_SPEED,
      };
    }
    renderBackgroundSlideshow();
    startBackgroundSlideshow();
  } catch { /* ignore */ }
}

async function persistBackgroundSlideshow() {
  try {
    await chrome.storage.local.set({ [BG_STORAGE_KEY]: bgSlideshowData });
  } catch { /* ignore */ }
}

function renderBackgroundSlideshow() {
  if (!bgSlideshow) return;
  bgSlideshow.innerHTML = '';
  const images = bgSlideshowData.images || [];
  if (images.length === 0) {
    bgSlideshow.style.display = 'none';
    document.body.style.background = 'var(--bg)';
    document.documentElement.removeAttribute('data-bg-bright');
    hidePhotoCredit();
    return;
  }
  bgSlideshow.style.display = 'block';
  bgSlideshow.style.visibility = 'visible';
  // Make body background transparent so slideshow shows through
  document.body.style.background = 'transparent';
  bgSlideshow.setAttribute('data-transition', bgSlideshowData.transition);
  bgSlideshow.style.setProperty('--bg-transition-speed', `${bgSlideshowData.transitionSpeed}s`);
  images.forEach((item, i) => {
    const img = document.createElement('img');
    const imageUrl = typeof item === 'string' ? item : item.url;
    img.src = imageUrl;
    img.className = 'bg-slide';
    if (i === bgCurrentIndex) {
      img.classList.add('active');
      // Force first image to be visible immediately
      img.style.opacity = '1';
      img.style.transition = 'none';
      setTimeout(() => {
        img.style.transition = '';
      }, 100);
      showPhotoCredit(typeof item === 'object' && item.attribution ? item.attribution : null);
      // Analyze brightness of current image
      img.onload = async () => {
        const brightness = await analyzeImageBrightness(imageUrl);
        updateTextColorForImage(brightness);
      };
    }
    if (i === (bgCurrentIndex + 1) % images.length) img.classList.add('next');
    bgSlideshow.appendChild(img);
  });
}

// ─── Image Brightness Detection ────────────────────────────────────────────

async function analyzeImageBrightness(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    // Only set crossOrigin for external URLs (not data URLs)
    if (!imageUrl.startsWith('data:')) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // Limit canvas size for performance (max 500px)
        const maxSize = 500;
        let width = img.width;
        let height = img.height;
        if (width > maxSize || height > maxSize) {
          const ratio = Math.min(maxSize / width, maxSize / height);
          width = Math.floor(width * ratio);
          height = Math.floor(height * ratio);
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Sample pixels (every 10th pixel for performance)
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        let totalBrightness = 0;
        let sampleCount = 0;
        
        // Sample pixels in a grid pattern for better performance
        const step = 10;
        for (let i = 0; i < data.length; i += 4 * step) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Calculate relative luminance (perceived brightness)
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          totalBrightness += luminance;
          sampleCount++;
        }
        
        const avgBrightness = totalBrightness / sampleCount;
        console.log('Image brightness calculated:', avgBrightness);
        resolve(avgBrightness);
      } catch (e) {
        console.error('Error analyzing image (CORS or other):', e);
        // If CORS error, try to estimate from the image element itself
        // This is a fallback that won't work for all cases
        resolve(0.5); // Default to medium brightness
      }
    };
    img.onerror = (e) => {
      console.warn('Image failed to load for brightness analysis:', e);
      resolve(0.5); // Default to medium brightness on error
    };
    img.src = imageUrl;
  });
}

function updateTextColorForImage(brightness) {
  // If brightness > 0.5, image is light, use dark text
  // If brightness < 0.5, image is dark, use light text
  const root = document.documentElement;
  if (brightness > 0.5) {
    root.setAttribute('data-bg-bright', 'light');
  } else {
    root.setAttribute('data-bg-bright', 'dark');
  }
}

function previewBackgroundSlideshow() {
  if (!bgSlideshow) {
    console.error('bgSlideshow element not found');
    return;
  }
  // Temporarily use editing images for preview
  const previewImages = bgEditingImages.map(item => {
    if (typeof item === 'string') {
      return { url: item, attribution: null };
    }
    return item;
  });
  console.log('Preview function called with', previewImages.length, 'images');
  if (previewImages.length === 0) {
    bgSlideshow.style.display = 'none';
    document.body.style.background = 'var(--bg)';
    document.documentElement.removeAttribute('data-bg-bright');
    hidePhotoCredit();
    return;
  }
  bgSlideshow.innerHTML = '';
  bgSlideshow.style.display = 'block';
  bgSlideshow.style.visibility = 'visible';
  // Make body background transparent so slideshow shows through
  document.body.style.background = 'transparent';
  const transition = bgTransition?.value || bgSlideshowData.transition || BG_DEFAULT_TRANSITION;
  const speed = bgTransitionSpeed?.value || bgSlideshowData.transitionSpeed || BG_DEFAULT_TRANSITION_SPEED;
  bgSlideshow.setAttribute('data-transition', transition);
  bgSlideshow.style.setProperty('--bg-transition-speed', `${speed}s`);
  
  previewImages.forEach((item, i) => {
    const img = document.createElement('img');
    img.className = 'bg-slide';
    
    // Ensure first image is immediately visible
    if (i === 0) {
      img.classList.add('active');
      // Force opacity and visibility immediately
      img.style.opacity = '1';
      img.style.visibility = 'visible';
      img.style.transition = 'none';
      img.style.zIndex = '1';
      showPhotoCredit(item.attribution);
      
      img.onload = async () => {
        console.log('First image loaded, ensuring visibility');
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        // Analyze brightness and update text color
        const brightness = await analyzeImageBrightness(item.url);
        console.log('Image brightness:', brightness);
        updateTextColorForImage(brightness);
      };
    } else {
      img.classList.add('next');
    }
    
    // Set src after setting up event handlers
    img.src = item.url;
    bgSlideshow.appendChild(img);
    
    // Force a reflow to ensure styles apply
    if (i === 0) {
      img.offsetHeight; // trigger reflow
      const computed = window.getComputedStyle(img);
      console.log('Image element created:', {
        opacity: computed.opacity,
        visibility: computed.visibility,
        display: computed.display,
        zIndex: computed.zIndex,
        src: img.src.substring(0, 50) + '...'
      });
      
      // Double-check visibility after a moment
      setTimeout(() => {
        const check = window.getComputedStyle(img);
        console.log('After timeout check:', {
          opacity: check.opacity,
          visibility: check.visibility,
          display: check.display
        });
        if (check.opacity === '0' || check.visibility === 'hidden') {
          console.warn('Image is still hidden! Forcing visibility...');
          img.style.setProperty('opacity', '1', 'important');
          img.style.setProperty('visibility', 'visible', 'important');
        }
      }, 200);
    }
  });
  console.log('Slideshow rendered with', previewImages.length, 'images');
  console.log('bgSlideshow element:', {
    display: window.getComputedStyle(bgSlideshow).display,
    visibility: window.getComputedStyle(bgSlideshow).visibility,
    zIndex: window.getComputedStyle(bgSlideshow).zIndex
  });
}

function startBackgroundSlideshow() {
  if (bgSlideshowInterval) clearInterval(bgSlideshowInterval);
  if (!bgSlideshowData.images || bgSlideshowData.images.length <= 1) return;
  bgSlideshowInterval = setInterval(() => {
    nextBackgroundSlide();
  }, bgSlideshowData.duration * 1000);
}

async function nextBackgroundSlide() {
  if (!bgSlideshow || !bgSlideshowData.images || bgSlideshowData.images.length === 0) return;
  const slides = bgSlideshow.querySelectorAll('.bg-slide');
  if (slides.length === 0) return;
  const prevIndex = bgCurrentIndex;
  bgCurrentIndex = (bgCurrentIndex + 1) % bgSlideshowData.images.length;
  const nextIndex = (bgCurrentIndex + 1) % bgSlideshowData.images.length;
  slides[prevIndex]?.classList.remove('active', 'next');
  slides[bgCurrentIndex]?.classList.add('active');
  if (bgSlideshowData.transition === 'crossfade') {
    slides[bgCurrentIndex]?.classList.remove('next');
  }
  slides[nextIndex]?.classList.add('next');
  if (bgSlideshowData.transition === 'crossfade') {
    slides[nextIndex]?.classList.remove('active');
  }
  // Update photo credit
  const currentItem = bgSlideshowData.images[bgCurrentIndex];
  showPhotoCredit(currentItem && typeof currentItem === 'object' && currentItem.attribution ? currentItem.attribution : null);
  // Analyze new image brightness
  const currentImage = slides[bgCurrentIndex];
  if (currentImage && currentImage.src) {
    const brightness = await analyzeImageBrightness(currentImage.src);
    updateTextColorForImage(brightness);
  }
}

function openBackgroundModal() {
  if (!bgOverlay) return;
  // Ensure images are in object format
  bgEditingImages = (bgSlideshowData.images || []).map(item => {
    if (typeof item === 'string') {
      return { url: item, attribution: null };
    }
    return item;
  });
  bgTransition.value = bgSlideshowData.transition;
  bgDuration.value = bgSlideshowData.duration;
  bgTransitionSpeed.value = bgSlideshowData.transitionSpeed;
  renderBackgroundImageList();
  // Show preview of existing images when modal opens
  if (bgEditingImages.length > 0) {
    previewBackgroundSlideshow();
  }
  bgOverlay.classList.add('open');
  setTimeout(() => bgImageInput?.focus(), 60);
}

function closeBackgroundModal() {
  if (bgOverlay) bgOverlay.classList.remove('open');
  // Restore original slideshow when modal closes (unless saved)
  renderBackgroundSlideshow();
  startBackgroundSlideshow();
}

function renderBackgroundImageList() {
  if (!bgImageList) return;
  bgImageList.innerHTML = '';
  if (bgEditingImages.length === 0) {
    bgImageList.innerHTML = '<p style="color: var(--muted); font-size: 13px; text-align: center; padding: 20px;">No images added yet</p>';
    return;
  }
  bgEditingImages.forEach((item, i) => {
    const url = typeof item === 'string' ? item : item.url;
    const itemEl = document.createElement('div');
    itemEl.className = 'bg-image-item';
    if (i === bgCurrentIndex) itemEl.classList.add('active');
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Background ${i + 1}`;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'bg-image-item-remove';
    removeBtn.type = 'button';
    removeBtn.title = 'Remove';
    removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      bgEditingImages.splice(i, 1);
      renderBackgroundImageList();
      previewBackgroundSlideshow();
    });
    itemEl.appendChild(img);
    itemEl.appendChild(removeBtn);
    bgImageList.appendChild(itemEl);
  });
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleBackgroundImageAdd() {
  if (!bgImageInput) return;
  const files = bgImageInput.files;
  if (!files || files.length === 0) return;
  try {
    console.log('Loading', files.length, 'file(s)');
    const promises = Array.from(files).map(fileToDataURL);
    const dataUrls = await Promise.all(promises);
    console.log('Loaded', dataUrls.length, 'image(s)');
    // Convert to objects for consistency
    const newImages = dataUrls.map(url => ({ url, attribution: null }));
    bgEditingImages.push(...newImages);
    console.log('Added images, total:', bgEditingImages.length);
    renderBackgroundImageList();
    bgImageInput.value = '';
    // Preview immediately - use setTimeout to ensure DOM updates
    setTimeout(() => {
      previewBackgroundSlideshow();
    }, 50);
  } catch (e) {
    console.error('Failed to load images:', e);
    alert('Failed to load images. Please try again.');
  }
}

async function saveBackgroundSettings() {
  // Ensure images are in object format
  bgSlideshowData.images = bgEditingImages.map(item => {
    if (typeof item === 'string') {
      return { url: item, attribution: null };
    }
    return item;
  });
  bgSlideshowData.transition = bgTransition.value || BG_DEFAULT_TRANSITION;
  bgSlideshowData.duration = Number(bgDuration.value) || BG_DEFAULT_DURATION;
  bgSlideshowData.transitionSpeed = Number(bgTransitionSpeed.value) || BG_DEFAULT_TRANSITION_SPEED;
  await persistBackgroundSlideshow();
  bgCurrentIndex = 0;
  console.log('Saving slideshow with', bgSlideshowData.images.length, 'images');
  renderBackgroundSlideshow();
  startBackgroundSlideshow();
  closeBackgroundModal();
}

async function clearBackgroundSlideshow() {
  if (!confirm('Remove all background images?')) return;
  bgSlideshowData.images = [];
  await persistBackgroundSlideshow();
  bgCurrentIndex = 0;
  renderBackgroundSlideshow();
  startBackgroundSlideshow();
  closeBackgroundModal();
}

// ─── Photo Credit Display ───────────────────────────────────────────────────

function showPhotoCredit(attribution) {
  if (!photoCredit || !photoCreditAuthor || !photoCreditPhotoPage) return;
  if (!attribution || !attribution.name) {
    hidePhotoCredit();
    return;
  }
  photoCreditAuthor.textContent = attribution.name;
  photoCreditAuthor.href = attribution.link || `https://unsplash.com/@${attribution.username || ''}`;
  photoCreditPhotoPage.href = attribution.photoPageUrl
    || 'https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
  photoCredit.classList.add('visible');
  photoCredit.setAttribute('aria-hidden', 'false');
}

function hidePhotoCredit() {
  if (photoCredit) {
    photoCredit.classList.remove('visible');
    photoCredit.setAttribute('aria-hidden', 'true');
  }
}

/** In-memory demo for Unsplash API application screenshot (not saved to storage). */
function applyUnsplashScreenshotDemo() {
  if (!UNSPLASH_SCREENSHOT_DEMO || !bgSlideshow) return;
  const demoUrl = chrome.runtime.getURL('unsplash-demo-screenshot.png');
  bgSlideshowData.images = [{
    url: demoUrl,
    attribution: { ...UNSPLASH_DEMO_ATTRIBUTION },
  }];
  bgSlideshowData.transition = BG_DEFAULT_TRANSITION;
  bgSlideshowData.duration = BG_DEFAULT_DURATION;
  bgSlideshowData.transitionSpeed = BG_DEFAULT_TRANSITION_SPEED;
  bgCurrentIndex = 0;
  document.body.style.background = 'transparent';
  renderBackgroundSlideshow();
  startBackgroundSlideshow();
  analyzeImageBrightness(demoUrl).then(updateTextColorForImage);
}

// ─── Unsplash API ───────────────────────────────────────────────────────────

let unsplashApiKey = '';

async function loadUnsplashApiKey() {
  try {
    const result = await chrome.storage.local.get([UNSPLASH_API_KEY_STORAGE_KEY]);
    const key = result[UNSPLASH_API_KEY_STORAGE_KEY] || '';
    unsplashApiKey = key;
    if (unsplashApiKeyInput && key) {
      unsplashApiKeyInput.value = key;
    }
  } catch { /* ignore */ }
}

async function saveUnsplashApiKey(key) {
  try {
    unsplashApiKey = key.trim();
    await chrome.storage.local.set({ [UNSPLASH_API_KEY_STORAGE_KEY]: unsplashApiKey });
  } catch { /* ignore */ }
}

async function searchUnsplash(query = '', page = 1) {
  if (!unsplashApiKey) {
    if (unsplashError) {
      unsplashError.style.display = 'block';
      unsplashError.textContent = 'Unsplash API key not set. Click "Get your free API key" link to get one.';
    }
    return [];
  }
  try {
    const url = query
      ? `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=20&page=${page}`
      : `${UNSPLASH_API_BASE}/photos/random?count=20`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `Client-ID ${unsplashApiKey}`,
      },
    });
    if (!res.ok) {
      if (res.status === 401) {
        if (unsplashError) {
          unsplashError.style.display = 'block';
          unsplashError.textContent = 'Invalid API key. Please check your Unsplash API key.';
        }
      } else {
        throw new Error(`Unsplash API error: ${res.status}`);
      }
      return [];
    }
    const data = await res.json();
    if (unsplashError) unsplashError.style.display = 'none';
    return query ? data.results : data;
  } catch (e) {
    console.error('Unsplash API error:', e);
    if (unsplashError) {
      unsplashError.style.display = 'block';
      unsplashError.textContent = `Error: ${e.message}`;
    }
    return [];
  }
}

function renderUnsplashGrid(photos) {
  if (!unsplashGrid) return;
  unsplashGrid.innerHTML = '';
  if (photos.length === 0) {
    unsplashGrid.innerHTML = '<p style="color: var(--muted); font-size: 13px; text-align: center; padding: 40px; grid-column: 1 / -1;">No photos found</p>';
    return;
  }
  photos.forEach((photo) => {
    const item = document.createElement('div');
    item.className = 'unsplash-item';
    const img = document.createElement('img');
    img.src = photo.urls.thumb || photo.urls.small;
    img.alt = photo.description || photo.alt_description || 'Unsplash photo';
    img.loading = 'lazy';
    const overlay = document.createElement('div');
    overlay.className = 'unsplash-item-overlay';
    overlay.innerHTML = `<strong>${photo.user.name || 'Unknown'}</strong>`;
    const addBtn = document.createElement('button');
    addBtn.className = 'unsplash-item-add';
    addBtn.type = 'button';
    addBtn.title = 'Add to slideshow';
    addBtn.setAttribute('aria-label', 'Add photo to slideshow');
    addBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    // Also make the item itself clickable as a fallback
    item.addEventListener('click', async (e) => {
      // Only trigger if clicking the item itself, not the button (button handles its own click)
      if (e.target === item || e.target === img || e.target === overlay) {
        addBtn.click();
      }
    });
    addBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      e.preventDefault();
      try {
        // Ensure bgEditingImages is initialized
        if (!bgEditingImages) {
          bgEditingImages = [];
        }
        // Use regular size for better quality
        const imageUrl = photo.urls.regular || photo.urls.full;
        if (!imageUrl) {
          console.error('No image URL available');
          return;
        }
        const attribution = {
          name: photo.user.name,
          username: photo.user.username,
          link: photo.user.links?.html || `https://unsplash.com/@${photo.user.username}`,
          photoPageUrl: photo.links?.html || `https://unsplash.com/photos/${photo.id}`,
        };
        bgEditingImages.push({ url: imageUrl, attribution });
        console.log('Added Unsplash photo, total images:', bgEditingImages.length);
        // Update the background modal's image list if it's open
        if (bgImageList) {
          renderBackgroundImageList();
        }
        // Show preview immediately
        previewBackgroundSlideshow();
        // Visual feedback
        addBtn.classList.add('selected');
        setTimeout(() => addBtn.classList.remove('selected'), 1000);
      } catch (err) {
        console.error('Failed to add photo:', err);
        alert('Failed to add photo. Check console for details.');
      }
    });
    item.appendChild(img);
    item.appendChild(overlay);
    item.appendChild(addBtn);
    unsplashGrid.appendChild(item);
  });
}

async function handleUnsplashSearch() {
  if (!unsplashSearch || !unsplashGrid || !unsplashLoading) return;
  const query = unsplashSearch.value.trim();
  unsplashLoading.style.display = 'block';
  unsplashError.style.display = 'none';
  unsplashGrid.innerHTML = '';
  try {
    const photos = await searchUnsplash(query || 'nature');
    renderUnsplashGrid(photos);
  } finally {
    unsplashLoading.style.display = 'none';
  }
}

async function openUnsplashModal() {
  if (!unsplashOverlay) return;
  await loadUnsplashApiKey();
  // Ensure bgEditingImages is initialized from saved data
  if (bgEditingImages.length === 0) {
    bgEditingImages = (bgSlideshowData.images || []).map(item => {
      if (typeof item === 'string') {
        return { url: item, attribution: null };
      }
      return item;
    });
  }
  if (unsplashApiKeyInput && unsplashApiKey) {
    unsplashApiKeyInput.value = unsplashApiKey;
  }
  unsplashOverlay.classList.add('open');
  if (unsplashSearch) {
    unsplashSearch.value = '';
    if (unsplashApiKey) {
      setTimeout(() => unsplashSearch.focus(), 60);
    } else {
      setTimeout(() => unsplashApiKeyInput?.focus(), 60);
    }
  }
  if (unsplashApiKey) {
    handleUnsplashSearch();
  }
}

function closeUnsplashModal() {
  if (unsplashOverlay) unsplashOverlay.classList.remove('open');
}

function bindBackgroundEvents() {
  if (bgEditBtn) bgEditBtn.addEventListener('click', openBackgroundModal);
  if (bgCloseBtn) bgCloseBtn.addEventListener('click', closeBackgroundModal);
  if (bgCancelBtn) bgCancelBtn.addEventListener('click', closeBackgroundModal);
  if (bgSaveBtn) bgSaveBtn.addEventListener('click', saveBackgroundSettings);
  if (bgClearBtn) bgClearBtn.addEventListener('click', clearBackgroundSlideshow);
  if (bgAddBtn) bgAddBtn.addEventListener('click', () => bgImageInput?.click());
  if (bgImageInput) bgImageInput.addEventListener('change', handleBackgroundImageAdd);
  if (bgUnsplashBtn) bgUnsplashBtn.addEventListener('click', openUnsplashModal);
  if (bgOverlay) bgOverlay.addEventListener('click', (e) => { if (e.target === bgOverlay) closeBackgroundModal(); });
  if (unsplashSearchBtn) unsplashSearchBtn.addEventListener('click', handleUnsplashSearch);
  if (unsplashSearch) {
    unsplashSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleUnsplashSearch();
    });
  }
  if (unsplashApiKeySave) {
    unsplashApiKeySave.addEventListener('click', async () => {
      if (unsplashApiKeyInput) {
        await saveUnsplashApiKey(unsplashApiKeyInput.value);
        if (unsplashError) unsplashError.style.display = 'none';
        handleUnsplashSearch();
      }
    });
  }
  if (unsplashApiKeyInput) {
    unsplashApiKeyInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        unsplashApiKeySave?.click();
      }
    });
  }
  if (unsplashCloseBtn) unsplashCloseBtn.addEventListener('click', closeUnsplashModal);
  if (unsplashCancelBtn) unsplashCancelBtn.addEventListener('click', closeUnsplashModal);
  if (unsplashOverlay) unsplashOverlay.addEventListener('click', (e) => { if (e.target === unsplashOverlay) closeUnsplashModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (bgOverlay && bgOverlay.classList.contains('open')) closeBackgroundModal();
      if (unsplashOverlay && unsplashOverlay.classList.contains('open')) closeUnsplashModal();
    }
  });
}

// ─── Weather ─────────────────────────────────────────────────────────────────

function wmoToTheme(code) {
  return WMO_TO_THEME[Number(code)] || 'partly-cloudy';
}

function applyWeatherTheme(themeKey) {
  const root = document.documentElement;
  if (themeKey) root.setAttribute('data-weather', themeKey);
  else root.removeAttribute('data-weather');
}

function renderWeatherBadge(data) {
  if (!weatherBadge || !data) return;
  const themeKey = wmoToTheme(data.weather_code);
  const temp = data.temperature_2m != null ? Math.round(data.temperature_2m) : '';
  if (weatherIcon) weatherIcon.innerHTML = WEATHER_ICONS[themeKey] || WEATHER_ICONS.cloudy;
  if (weatherTemp) weatherTemp.textContent = temp !== '' ? `${temp}°` : '';
  if (weatherDesc) weatherDesc.textContent = WEATHER_LABELS[themeKey] || '';
  weatherBadge.hidden = false;
}

async function loadWeatherFromCache() {
  try {
    const raw = await chrome.storage.local.get([WEATHER_CACHE_KEY]);
    const cached = raw[WEATHER_CACHE_KEY];
    if (!cached || !cached.data || typeof cached.at !== 'number') return;
    if (Date.now() - cached.at > WEATHER_CACHE_TTL_MS) return;
    const themeKey = wmoToTheme(cached.data.weather_code);
    applyWeatherTheme(themeKey);
    renderWeatherBadge(cached.data);
    updateWeatherAnimations(themeKey);
  } catch { /* ignore */ }
}

function getLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => resolve(null),
      { timeout: 8000, maximumAge: 3600000 }
    );
  });
}

async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto&temperature_unit=fahrenheit`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');
  const json = await res.json();
  const cur = json.current;
  if (!cur) throw new Error('No current weather');
  return {
    temperature_2m: cur.temperature_2m,
    weather_code: cur.weather_code,
  };
}

async function loadWeather() {
  try {
    const loc = await getLocation();
    if (!loc) return;
    const data = await fetchWeather(loc.lat, loc.lon);
    const themeKey = wmoToTheme(data.weather_code);
    applyWeatherTheme(themeKey);
    renderWeatherBadge(data);
    updateWeatherAnimations(themeKey);
    await chrome.storage.local.set({
      [WEATHER_CACHE_KEY]: { data, at: Date.now() },
    });
  } catch { /* ignore */ }
}

// ─── Weather Animations ────────────────────────────────────────────────────────

let weatherAnimEnabled = true;
let weatherAnimInterval = null;

async function loadWeatherAnimEnabled() {
  try {
    const result = await chrome.storage.local.get([WEATHER_ANIM_ENABLED_KEY]);
    weatherAnimEnabled = result[WEATHER_ANIM_ENABLED_KEY] !== false; // default true
    if (weatherAnimToggle) weatherAnimToggle.checked = weatherAnimEnabled;
  } catch { /* ignore */ }
}

async function saveWeatherAnimEnabled() {
  if (!weatherAnimToggle) return;
  weatherAnimEnabled = weatherAnimToggle.checked;
  try {
    await chrome.storage.local.set({ [WEATHER_ANIM_ENABLED_KEY]: weatherAnimEnabled });
    // Update animations immediately
    const root = document.documentElement;
    const currentWeather = root.getAttribute('data-weather');
    if (currentWeather) updateWeatherAnimations(currentWeather);
  } catch { /* ignore */ }
}

function clearWeatherAnimations() {
  if (!weatherAnimations) return;
  weatherAnimations.innerHTML = '';
  weatherAnimations.className = 'weather-animations';
  if (weatherAnimInterval) {
    clearInterval(weatherAnimInterval);
    weatherAnimInterval = null;
  }
}

function updateWeatherAnimations(themeKey) {
  clearWeatherAnimations();
  if (!weatherAnimEnabled || !weatherAnimations || !themeKey) return;
  
  weatherAnimations.className = `weather-animations weather-${themeKey}`;
  weatherAnimations.setAttribute('aria-hidden', 'false');
  
  switch (themeKey) {
    case 'rain':
      createRainAnimation();
      break;
    case 'snow':
      createSnowAnimation();
      break;
    case 'storm':
      createStormAnimation();
      break;
    case 'fog':
      createFogAnimation();
      break;
    case 'clear':
      createClearAnimation();
      break;
    case 'partly-cloudy':
    case 'cloudy':
      createCloudyAnimation();
      break;
  }
}

function createRainAnimation() {
  for (let i = 0; i < 80; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
    weatherAnimations.appendChild(drop);
  }
}

function createSnowAnimation() {
  for (let i = 0; i < 50; i++) {
    const flake = document.createElement('div');
    flake.className = 'snowflake';
    flake.textContent = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
    flake.style.left = Math.random() * 100 + '%';
    flake.style.animationDelay = Math.random() * 5 + 's';
    flake.style.animationDuration = (3 + Math.random() * 4) + 's';
    flake.style.fontSize = (8 + Math.random() * 12) + 'px';
    flake.style.opacity = 0.3 + Math.random() * 0.7;
    weatherAnimations.appendChild(flake);
  }
}

function createStormAnimation() {
  // Lightning flashes
  weatherAnimInterval = setInterval(() => {
    const flash = document.createElement('div');
    flash.className = 'lightning-flash';
    weatherAnimations.appendChild(flash);
    setTimeout(() => flash.remove(), 150);
  }, 2000 + Math.random() * 3000);
  
  // Rain
  createRainAnimation();
}

function createFogAnimation() {
  for (let i = 0; i < 20; i++) {
    const fog = document.createElement('div');
    fog.className = 'fog-particle';
    fog.style.left = Math.random() * 100 + '%';
    fog.style.animationDelay = Math.random() * 10 + 's';
    fog.style.animationDuration = (15 + Math.random() * 10) + 's';
    fog.style.opacity = 0.1 + Math.random() * 0.3;
    weatherAnimations.appendChild(fog);
  }
}

function createClearAnimation() {
  // Soft upper glow only — radial spokes from center read like clock hands on the page
  for (let i = 0; i < 3; i++) {
    const glow = document.createElement('div');
    glow.className = 'clear-sky-glow';
    glow.style.animationDelay = (i * 0.8) + 's';
    weatherAnimations.appendChild(glow);
  }
}

function createCloudyAnimation() {
  for (let i = 0; i < 15; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud-particle';
    cloud.style.left = Math.random() * 100 + '%';
    cloud.style.animationDelay = Math.random() * 5 + 's';
    cloud.style.animationDuration = (20 + Math.random() * 15) + 's';
    cloud.style.opacity = 0.15 + Math.random() * 0.25;
    weatherAnimations.appendChild(cloud);
  }
}

function bindWeatherAnimEvents() {
  if (weatherAnimToggle) {
    weatherAnimToggle.addEventListener('change', saveWeatherAnimEnabled);
  }
}

function migrateLegacyShortcuts() {
  const firstGroupId = groups.length ? groups[0].id : uid();
  if (!groups.length) groups = [{ id: firstGroupId, name: 'General', order: 0 }];
  let changed = false;
  shortcuts = shortcuts.map((s, i) => {
    if (s.groupId == null) {
      changed = true;
      return { ...s, groupId: firstGroupId, order: s.order != null ? s.order : i };
    }
    if (s.order == null) {
      changed = true;
      return { ...s, order: i };
    }
    return s;
  });
  if (changed) persist();
}

// ─── Clock ───────────────────────────────────────────────────────────────────

function startClock() {
  tick();
  setInterval(tick, 1000);
}

function tick() {
  const now = new Date();
  let h    = now.getHours();
  const m  = String(now.getMinutes()).padStart(2, '0');
  const ap = h >= 12 ? 'pm' : 'am';
  h = h % 12 || 12;

  $('clock').innerHTML =
    `${h}<span class="clock-colon">:</span>${m}<span class="clock-ampm">${ap}</span>`;
}

function updateMeta() {
  const h     = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  $('greeting').textContent = greet;

  const opts = { weekday: 'long', month: 'long', day: 'numeric' };
  $('dateStr').textContent = new Date().toLocaleDateString('en-US', opts);
}

function updateCopyrightYear() {
  const yearEl = document.getElementById('copyrightYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function getSearchUrl(query) {
  const enc = encodeURIComponent(query);
  const engine = SEARCH_ENGINES.find(e => e.id === settings.searchEngine) || SEARCH_ENGINES[0];
  return (engine.url || SEARCH_ENGINES[0].url).replace('%s', enc);
}

function renderSearchEngineOptions() {
  searchEngineEl.innerHTML = '';
  SEARCH_ENGINES.forEach(e => {
    const opt = document.createElement('option');
    opt.value = e.id;
    opt.textContent = e.name;
    if (e.id === settings.searchEngine) opt.selected = true;
    searchEngineEl.appendChild(opt);
  });
}

// ─── Groups + grid render ────────────────────────────────────────────────────

function shortcutsForGroup(groupId) {
  return shortcuts
    .filter(s => s.groupId === groupId)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function renderGroups() {
  groupsContainer.innerHTML = '';
  const sortedGroups = [...groups].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  sortedGroups.forEach((grp, grpIndex) => {
    const section = document.createElement('section');
    section.className = 'group-section';
    section.dataset.groupId = grp.id;

    const header = document.createElement('div');
    header.className = 'group-header';
    header.innerHTML = `
      <div class="group-title-row">
        <h3 class="group-title" data-group-id="${grp.id}">${escapeHtml(grp.name)}</h3>
        <div class="group-header-actions">
          <button type="button" class="icon-btn icon-btn-sm group-move group-move-up" title="Move group up" aria-label="Move group up" data-group-id="${grp.id}">▲</button>
          <button type="button" class="icon-btn icon-btn-sm group-move group-move-down" title="Move group down" aria-label="Move group down" data-group-id="${grp.id}">▼</button>
          <button type="button" class="icon-btn icon-btn-sm group-edit" title="Edit group name" aria-label="Edit group" data-group-id="${grp.id}">
            <svg viewBox="0 0 24 24" fill="none" width="12" height="12"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <button type="button" class="add-fab add-fab-sm add-shortcut-in-group" title="Add shortcut here" data-group-id="${grp.id}">+</button>
        </div>
      </div>
    `;

    const grid = document.createElement('div');
    grid.className = 'shortcuts-grid group-grid';
    grid.dataset.groupId = grp.id;
    grid.setAttribute('role', 'list');
    grid.addEventListener('dragover', onShortcutDragOver);
    grid.addEventListener('drop', onShortcutDrop);
    grid.addEventListener('dragenter', onShortcutDragEnter);
    grid.addEventListener('dragleave', onShortcutDragLeave);

    const items = shortcutsForGroup(grp.id);
    items.forEach(s => {
      const card = createShortcutCard(s, grid);
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);
    groupsContainer.appendChild(section);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function createShortcutCard(s, gridEl) {
  const card = document.createElement('a');
  card.className = 'shortcut-card';
  card.href = s.url;
  card.title = s.name;
  card.draggable = true;
  card.dataset.shortcutId = s.id;
  card.dataset.groupId = s.groupId;
  card.setAttribute('role', 'listitem');

  const [r, g, b] = hexToRgb(s.color);
  card.style.setProperty('--card-wash', `rgba(${r},${g},${b},0.1)`);
  card.style.setProperty('--card-border', `rgba(${r},${g},${b},0.22)`);

  const iconWrap = document.createElement('div');
  iconWrap.className = 'card-icon';
  iconWrap.style.color = s.color;
  if (s.svg?.trim()) {
    iconWrap.innerHTML = sanitizeSvg(s.svg);
  } else {
    const letter = document.createElement('div');
    letter.className = 'card-letter';
    letter.style.color = s.color;
    letter.textContent = s.name.charAt(0).toUpperCase();
    iconWrap.appendChild(letter);
  }

  const label = document.createElement('span');
  label.className = 'card-label';
  label.textContent = s.name;

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.type = 'button';
  editBtn.title = 'Edit shortcut';
  editBtn.setAttribute('aria-label', `Edit ${s.name}`);
  editBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  editBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    openModal(s.id);
  });

  card.appendChild(iconWrap);
  card.appendChild(label);
  card.appendChild(editBtn);

  card.addEventListener('dragstart', onShortcutDragStart);
  card.addEventListener('dragend', onShortcutDragEnd);
  card.addEventListener('dragover', onShortcutDragOver);
  card.addEventListener('drop', onShortcutDrop);
  card.addEventListener('dragenter', onShortcutDragEnter);
  card.addEventListener('dragleave', onShortcutDragLeave);

  return card;
}

// ─── Drag and drop ───────────────────────────────────────────────────────────

let draggedCard = null;
let dragOverGrid = null;

function onShortcutDragStart(e) {
  if (e.target.closest('.edit-btn')) return;
  draggedCard = e.currentTarget;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', e.currentTarget.dataset.shortcutId);
  e.currentTarget.classList.add('dragging');
}

function onShortcutDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.shortcuts-grid').forEach(el => el.classList.remove('drag-over'));
  draggedCard = null;
  dragOverGrid = null;
}

function onShortcutDragOver(e) {
  if (!draggedCard) return;
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  const grid = e.currentTarget.closest('.shortcuts-grid');
  if (grid) dragOverGrid = grid;
}

function onShortcutDragEnter(e) {
  const grid = e.currentTarget.closest('.shortcuts-grid');
  if (grid && draggedCard && e.currentTarget !== draggedCard) grid.classList.add('drag-over');
}

function onShortcutDragLeave(e) {
  const grid = e.currentTarget.closest('.shortcuts-grid');
  const related = e.relatedTarget;
  if (grid && (!related || !grid.contains(related))) grid.classList.remove('drag-over');
}

function onShortcutDrop(e) {
  e.preventDefault();
  const grid = e.currentTarget.closest('.shortcuts-grid');
  if (!grid || !draggedCard) return;
  grid.classList.remove('drag-over');
  const targetGroupId = grid.dataset.groupId;
  const shortcutId = draggedCard.dataset.shortcutId;
  const targetCard = e.target.closest('.shortcut-card');
  const targetId = targetCard ? targetCard.dataset.shortcutId : null;
  const fromGroupId = draggedCard.dataset.groupId;
  if (shortcutId === targetId) return;

  let orderedIds = shortcutsForGroup(targetGroupId).map(x => x.id).filter(id => id !== shortcutId);
  const insertIdx = targetId ? orderedIds.indexOf(targetId) : orderedIds.length;
  if (insertIdx === -1) orderedIds.push(shortcutId);
  else orderedIds.splice(insertIdx, 0, shortcutId);

  orderedIds.forEach((id, i) => {
    const s = shortcuts.find(x => x.id === id);
    if (s) {
      s.groupId = targetGroupId;
      s.order = i;
    }
  });
  persist();
  renderGroups();
  draggedCard = null;
}

// ─── Group header actions ────────────────────────────────────────────────────

function moveGroup(groupId, dir) {
  const idx = groups.findIndex(g => g.id === groupId);
  if (idx === -1) return;
  const next = dir === 'up' ? idx - 1 : idx + 1;
  if (next < 0 || next >= groups.length) return;
  [groups[idx].order, groups[next].order] = [groups[next].order, groups[idx].order];
  groups.forEach((g, i) => { g.order = i; });
  persist();
  renderGroups();
}

function openGroupModal(id = null) {
  editingGroupId = id;
  if (id) {
    const g = groups.find(x => x.id === id);
    if (!g) return;
    groupModalHeading.textContent = 'Edit group';
    fGroupName.value = g.name;
    groupDeleteBtn.style.visibility = groups.length > 1 ? 'visible' : 'hidden';
  } else {
    groupModalHeading.textContent = 'New group';
    fGroupName.value = '';
    groupDeleteBtn.style.visibility = 'hidden';
  }
  groupOverlay.classList.add('open');
  setTimeout(() => fGroupName.focus(), 60);
}

function closeGroupModal() {
  groupOverlay.classList.remove('open');
  editingGroupId = null;
}

async function saveGroup() {
  const name = fGroupName.value.trim();
  if (!name) {
    fGroupName.focus();
    shake(fGroupName);
    return;
  }
  if (editingGroupId) {
    const g = groups.find(x => x.id === editingGroupId);
    if (g) g.name = name;
  } else {
    groups.push({ id: uid(), name, order: groups.length });
  }
  await persist();
  renderGroups();
  populateGroupSelect();
  closeGroupModal();
}

async function deleteGroup() {
  if (!editingGroupId) return;
  if (groups.length <= 1) return;
  const firstId = groups.find(g => g.id !== editingGroupId)?.id;
  if (firstId) {
    shortcuts.forEach(s => {
      if (s.groupId === editingGroupId) {
        s.groupId = firstId;
        s.order = shortcuts.filter(x => x.groupId === firstId).length + (s.order ?? 0);
      }
    });
  }
  groups = groups.filter(g => g.id !== editingGroupId);
  await persist();
  renderGroups();
  populateGroupSelect();
  closeGroupModal();
}

function populateGroupSelect() {
  fGroup.innerHTML = '';
  const sorted = [...groups].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  sorted.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.id;
    opt.textContent = g.name;
    fGroup.appendChild(opt);
  });
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function openModal(id = null, defaultGroupId = null) {
  editingId = id;
  populateGroupSelect();

  if (id) {
    const s = shortcuts.find(x => x.id === id);
    if (!s) return;
    modalHeading.textContent = 'Edit Shortcut';
    fName.value = s.name;
    fUrl.value = s.url;
    fColor.value = s.color;
    fSvg.value = s.svg || '';
    fGroup.value = s.groupId || (groups[0]?.id ?? '');
    deleteBtn.style.visibility = 'visible';
    updatePreview();
  } else {
    modalHeading.textContent = 'New Shortcut';
    fName.value = '';
    fUrl.value = '';
    fColor.value = '#e8c97a';
    fSvg.value = '';
    fGroup.value = defaultGroupId || (groups[0]?.id ?? '');
    deleteBtn.style.visibility = 'hidden';
    iconPreview.innerHTML = '';
    iconPreview.style.borderColor = '';
  }

  highlightActiveSwatch(fColor.value);
  overlay.classList.add('open');
  setTimeout(() => fName.focus(), 60);
}

function closeModal() {
  overlay.classList.remove('open');
  editingId = null;
}

async function saveShortcut() {
  const name = fName.value.trim();
  const url = normaliseUrl(fUrl.value.trim());
  const groupId = fGroup.value || (groups[0]?.id);

  if (!name) { fName.focus(); shake(fName); return; }
  if (!url) { fUrl.focus(); shake(fUrl); return; }

  let order = 0;
  if (editingId) {
    const existing = shortcuts.find(x => x.id === editingId);
    order = existing ? (existing.order ?? 0) : shortcutsForGroup(groupId).length;
  } else {
    order = shortcutsForGroup(groupId).length;
  }

  const data = {
    id: editingId || uid(),
    groupId,
    order,
    name,
    url,
    color: fColor.value,
    svg: fSvg.value.trim(),
  };

  if (editingId) {
    const idx = shortcuts.findIndex(x => x.id === editingId);
    if (idx !== -1) shortcuts[idx] = data;
  } else {
    shortcuts.push(data);
  }

  await persist();
  renderGroups();
  closeModal();
}

async function deleteShortcut() {
  if (!editingId) return;
  shortcuts = shortcuts.filter(x => x.id !== editingId);
  await persist();
  renderGroups();
  closeModal();
}

// ─── Storage ─────────────────────────────────────────────────────────────────

async function persist() {
  try {
    await chrome.storage.local.set({ shortcuts, groups, settings });
  } catch { /* dev */ }
}

// ─── Notes ────────────────────────────────────────────────────────────────────

const NOTES_STORAGE_KEY = 'notesContent';
const NOTES_VISIBLE_KEY = 'notesVisible';
const WEATHER_ANIM_ENABLED_KEY = 'weatherAnimEnabled';

let notesSaveTimer = null;

async function loadNotes() {
  try {
    const result = await chrome.storage.local.get([NOTES_STORAGE_KEY]);
    const content = result[NOTES_STORAGE_KEY];
    if (typeof content === 'string' && notesText) notesText.value = content;
  } catch { /* dev */ }
}

async function persistNotes() {
  if (!notesText) return;
  try {
    await chrome.storage.local.set({ [NOTES_STORAGE_KEY]: notesText.value });
  } catch { /* dev */ }
}

async function loadNotesVisibility() {
  try {
    const result = await chrome.storage.local.get([NOTES_VISIBLE_KEY]);
    const isVisible = result[NOTES_VISIBLE_KEY] !== false; // Default to true
    toggleNotesVisibility(isVisible, false); // false = don't persist
  } catch { /* dev */ }
}

async function persistNotesVisibility(isVisible) {
  try {
    await chrome.storage.local.set({ [NOTES_VISIBLE_KEY]: isVisible });
  } catch { /* dev */ }
}

function toggleNotesVisibility(isVisible, persist = true) {
  if (!notesSection || !notesContent || !notesToggle) return;
  if (isVisible) {
    notesSection.classList.remove('notes-collapsed');
    notesToggle.setAttribute('aria-expanded', 'true');
    notesToggle.setAttribute('title', 'Hide notes');
  } else {
    notesSection.classList.add('notes-collapsed');
    notesToggle.setAttribute('aria-expanded', 'false');
    notesToggle.setAttribute('title', 'Show notes');
  }
  if (persist) persistNotesVisibility(isVisible);
}

function bindNotesEvents() {
  if (!notesText) return;
  notesText.addEventListener('input', () => {
    if (notesSaveTimer) clearTimeout(notesSaveTimer);
    notesSaveTimer = setTimeout(persistNotes, 500);
  });
  if (notesToggle) {
    notesToggle.addEventListener('click', () => {
      const isCurrentlyVisible = !notesSection.classList.contains('notes-collapsed');
      toggleNotesVisibility(!isCurrentlyVisible);
    });
  }
}

// ─── Backup & Restore ───────────────────────────────────────────────────────

function exportBackup() {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    shortcuts,
    groups,
    settings,
    notes: notesText ? notesText.value : '',
    logoSvg: logoSvg || '',
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `start-page-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function restoreFromBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.shortcuts)) {
        alert('Invalid backup: missing or invalid shortcuts.');
        return;
      }
      if (Array.isArray(data.groups) && data.groups.length > 0) {
        groups = data.groups.map((g, i) => ({
          id: g.id || uid(),
          name: String(g.name || '').trim() || 'Group',
          order: g.order != null ? g.order : i,
        }));
      }
      const firstGroupId = groups[0]?.id ?? uid();
      const validGroupIds = new Set(groups.map(g => g.id));
      shortcuts = data.shortcuts.map((s, i) => ({
        id: s.id || uid(),
        groupId: validGroupIds.has(s.groupId) ? s.groupId : firstGroupId,
        order: s.order != null ? s.order : i,
        name: String(s.name || '').trim() || 'Unnamed',
        url: normaliseUrl(String(s.url || '')),
        color: /^#[0-9A-Fa-f]{6}$/.test(s.color) ? s.color : '#b0bec5',
        svg: typeof s.svg === 'string' ? s.svg : '',
      })).filter(s => s.url);
      if (data.settings && typeof data.settings === 'object') {
        if (typeof data.settings.searchEngine === 'string') settings.searchEngine = data.settings.searchEngine;
        if (['dark', 'light', 'system'].includes(data.settings.theme)) settings.theme = data.settings.theme;
      }
      if (typeof data.notes === 'string' && notesText) {
        notesText.value = data.notes;
        persistNotes();
      }
      if (typeof data.logoSvg === 'string') {
        logoSvg = data.logoSvg;
        persistLogo();
        renderLogo();
      }
      persist();
      applyTheme();
      renderSearchEngineOptions();
      renderThemeSelect();
      renderGroups();
    } catch (e) {
      alert('Invalid backup file. Please choose a valid JSON backup.');
    }
    restoreInput.value = '';
  };
  reader.readAsText(file);
}

// ─── SVG preview ─────────────────────────────────────────────────────────────

function updatePreview() {
  const raw = fSvg.value.trim();
  if (raw) {
    iconPreview.innerHTML = sanitizeSvg(raw);
    iconPreview.style.color = fColor.value;

    const [r, g, b] = hexToRgb(fColor.value);
    iconPreview.style.borderColor = `rgba(${r},${g},${b},0.3)`;

    const svg = iconPreview.querySelector('svg');
    if (svg) { svg.style.width = '28px'; svg.style.height = '28px'; }
  } else {
    iconPreview.innerHTML = '';
    iconPreview.style.borderColor = '';
    iconPreview.style.color = '';
  }
}

// ─── Swatches ────────────────────────────────────────────────────────────────

function renderSwatches() {
  swatchesEl.innerHTML = '';
  SWATCHES.forEach(hex => {
    const btn       = document.createElement('button');
    btn.type        = 'button';
    btn.className   = 'swatch';
    btn.style.background = hex;
    btn.title       = hex;
    btn.dataset.hex = hex;

    btn.addEventListener('click', () => {
      fColor.value = hex;
      updatePreview();
      highlightActiveSwatch(hex);
    });

    swatchesEl.appendChild(btn);
  });
}

function highlightActiveSwatch(hex) {
  document.querySelectorAll('.swatch').forEach(s => {
    s.classList.toggle('active', s.dataset.hex.toLowerCase() === hex.toLowerCase());
  });
}

// ─── Search ──────────────────────────────────────────────────────────────────

$('search').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const q = e.target.value.trim();
    if (q) window.location.href = getSearchUrl(q);
  }
});

searchEngineEl.addEventListener('change', () => {
  settings.searchEngine = searchEngineEl.value;
  persist();
});

themeSelect.addEventListener('change', () => {
  settings.theme = themeSelect.value;
  applyTheme();
  persist();
});

// ─── Events ──────────────────────────────────────────────────────────────────

function bindEvents() {
  addBtn.addEventListener('click', () => openModal());
  addGroupBtn.addEventListener('click', () => openGroupModal());
  backupBtn.addEventListener('click', () => exportBackup());
  restoreBtn.addEventListener('click', () => restoreInput.click());
  restoreInput.addEventListener('change', () => restoreFromBackup(restoreInput.files?.[0]));

  groupsContainer.addEventListener('click', e => {
    const up = e.target.closest('.group-move-up');
    const down = e.target.closest('.group-move-down');
    const edit = e.target.closest('.group-edit');
    const addInGroup = e.target.closest('.add-shortcut-in-group');
    if (up) moveGroup(up.dataset.groupId, 'up');
    else if (down) moveGroup(down.dataset.groupId, 'down');
    else if (edit) openGroupModal(edit.dataset.groupId);
    else if (addInGroup) openModal(null, addInGroup.dataset.groupId);
  });

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  saveBtn.addEventListener('click', saveShortcut);
  deleteBtn.addEventListener('click', deleteShortcut);

  fSvg.addEventListener('input', updatePreview);
  fColor.addEventListener('input', () => {
    updatePreview();
    highlightActiveSwatch(fColor.value);
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.addEventListener('keydown', e => {
    if (overlay.classList.contains('open') && e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      saveShortcut();
    }
  });
}

function bindGroupModalEvents() {
  groupCloseBtn.addEventListener('click', closeGroupModal);
  groupCancelBtn.addEventListener('click', closeGroupModal);
  groupSaveBtn.addEventListener('click', saveGroup);
  groupDeleteBtn.addEventListener('click', deleteGroup);
  groupOverlay.addEventListener('click', e => { if (e.target === groupOverlay) closeGroupModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && groupOverlay.classList.contains('open')) closeGroupModal();
  });
}

// ─── Utilities ───────────────────────────────────────────────────────────────

function uid() {
  return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function normaliseUrl(url) {
  if (!url) return '';
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  try { new URL(url); return url; } catch { return ''; }
}

function sanitizeSvg(svg) {
  return svg
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '');
}

function shake(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.35s ease';
  el.addEventListener('animationend', () => { el.style.animation = ''; }, { once: true });
}

// Inject shake keyframes once
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}`;
document.head.appendChild(shakeStyle);

// ─── Go ───────────────────────────────────────────────────────────────────────

init();
