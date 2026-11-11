
import { alpha } from '@mui/material/styles';

function createGradient(color1, color2) {
  return `linear-gradient(135deg, ${color1}, ${color2})`;
}

const GREY = {
  0: '#FFFFFF',
  100: '#F5F6FA',
  200: '#E8EAF0',
  300: '#D1D5DF',
  400: '#AAB1C0',
  500: '#858DA0',
  600: '#626B80',
  700: '#414B61',
  800: '#202B3D',
  900: '#101522',
  500_8: alpha('#858DA0', 0.08),
  500_12: alpha('#858DA0', 0.12),
  500_16: alpha('#858DA0', 0.16),
  500_24: alpha('#858DA0', 0.24),
  500_32: alpha('#858DA0', 0.32),
  500_48: alpha('#858DA0', 0.48),
  500_56: alpha('#858DA0', 0.56),
  500_80: alpha('#858DA0', 0.8),
};

const PRIMARY = {
  lighter: '#E9DFFF',
  light: '#C4A8FF',
  main: '#A78BFA',
  dark: '#8062D9',
  darker: '#6043B5',
  contrastText: '#101522',
};

const SECONDARY = {
  lighter: '#D1FAE5',
  light: '#6EE7B7',
  main: '#34D399',
  dark: '#059669',
  darker: '#047857',
  contrastText: '#101522',
};

const INFO = {
  lighter: '#DBEAFE',
  light: '#93C5FD',
  main: '#60A5FA',
  dark: '#2563EB',
  darker: '#1E40AF',
  contrastText: '#101522',
};

const SUCCESS = {
  lighter: '#D1FAE5',
  light: '#6EE7B7',
  main: '#34D399',
  dark: '#059669',
  darker: '#047857',
  contrastText: '#101522',
};

const WARNING = {
  lighter: '#FEF3C7',
  light: '#FCD34D',
  main: '#FBBF24',
  dark: '#D97706',
  darker: '#92400E',
  contrastText: '#101522',
};

const ERROR = {
  lighter: '#FEE2E2',
  light: '#FCA5A5',
  main: '#F87171',
  dark: '#DC2626',
  darker: '#991B1B',
  contrastText: '#101522',
};

const GRADIENTS = {
  primary: createGradient('#A78BFA', '#6043B5'),
  info: createGradient('#60A5FA', '#2563EB'),
  success: createGradient('#6EE7B7', '#059669'),
  warning: createGradient('#FCD34D', '#D97706'),
  error: createGradient('#FCA5A5', '#DC2626'),
};

const CHART_COLORS = {
  violet: ['#A78BFA', '#C4A8FF', '#8062D9', '#6043B5'],
  blue: ['#60A5FA', '#93C5FD', '#2563EB', '#1E40AF'],
  green: ['#34D399', '#6EE7B7', '#059669', '#047857'],
  yellow: ['#FBBF24', '#FCD34D', '#D97706', '#92400E'],
  red: ['#F87171', '#FCA5A5', '#DC2626', '#991B1B'],
};

const palette = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: '#30394A',
  text: {
    primary: '#F8FAFC',
    secondary: '#A1A1AA',
    disabled: '#626B80',
  },
  background: {
    paper: '#202B3D',
    default: '#101522',
    neutral: '#182233',
  },
  action: {
    active: '#F8FAFC',
    hover: alpha('#A78BFA', 0.08),
    selected: alpha('#A78BFA', 0.16),
    disabled: alpha('#858DA0', 0.5),
    disabledBackground: alpha('#858DA0', 0.15),
    focus: alpha('#A78BFA', 0.2),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
