import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind, presetIcons } from 'unocss';

const opitons: VitePluginConfig = {
  presets: [presetAttributify(), presetWind(), presetIcons()]
};

export default opitons;
