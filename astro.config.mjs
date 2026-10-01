// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://pra-teu-louvor.pages.dev',
  integrations: [
    starlight({
      title: 'Pra Teu Louvor',
      description: 'Curso e Apostila Digital de Técnica Vocal — Igreja Cristã Maranata',
      favicon: '/favicon.svg',
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Header: './src/components/CustomHeader.astro',
      },
      sidebar: [
        {
          label: 'Apresentação',
          items: [
            { label: 'Visão Geral do Curso', link: '/' },
            { label: 'Vídeo de Chamada', link: '/apresentacao/chamada/' },
          ],
        },
        {
          label: 'Módulo 1: O Instrumento é Você',
          autogenerate: { directory: 'modulo-1' },
        },
        {
          label: 'Módulo 2: Respiração e Apoio',
          autogenerate: { directory: 'modulo-2' },
        },
        {
          label: 'Módulo 3: Energia, Fonte e Filtro',
          autogenerate: { directory: 'modulo-3' },
        },
        {
          label: 'Módulo 4: Registros e Fonação',
          autogenerate: { directory: 'modulo-4' },
        },
        {
          label: 'Módulo 5: Articuladores e Musculatura',
          autogenerate: { directory: 'modulo-5' },
        },
        {
          label: 'Módulo 6: Vogais e Consoantes',
          autogenerate: { directory: 'modulo-6' },
        },
        {
          label: 'Módulo 7: Rotina e Saúde Vocal',
          autogenerate: { directory: 'modulo-7' },
        },
        {
          label: 'Módulo 8: Repertório e Culto',
          autogenerate: { directory: 'modulo-8' },
        },
      ],
    }),
  ],
});
