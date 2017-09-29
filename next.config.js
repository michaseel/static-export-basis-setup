module.exports = {


    exportPathMap () {

        return {
          '/de': { page: '/', query: { locale: 'de', i18n: de } },
          '/de/kochen': { page: '/kochen', query: { locale: 'de', i18n: de }},
          '/de/rezept': { page: '/rezept', query: { locale: 'de', i18n: de }},

          '/fr': { page: '/', query: { locale: 'fr', i18n: i18n } },
          '/fr/cuisine': { page: '/kochen', query: { locale: 'fr', i18n: i18n } },
          '/fr/frezept': { page: '/rezept', query: { locale: 'fr', i18n: i18n } },

          '/it': { page: '/', query: { locale: 'it', i18n: it } },
          '/it/itkochen': { page: '/kochen', query: { locale: 'it', i18n: it } },
          '/it/italrezept': { page: '/rezept', query: { locale: 'it', i18n: it } },
        }
    }
};
