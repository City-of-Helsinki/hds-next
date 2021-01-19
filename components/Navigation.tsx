import { Navigation, IconSignout } from "hds-react";
import { useState } from "react";

type LanguageOption = {
  label: string;
  value: string;
};

const NavigationExample = () => {
  const i18n = {
    title: {
      fi: "Helsingin kaupunki",
      sv: "Helsingfors stad",
      en: "City of Helsinki",
    },
    titleAria: {
      fi: "Helsinki: Helsingin kaupunki",
      sv: "Helsingfors: Helsingfors stad",
      en: "Helsinki: City of Helsinki",
    },
    menuToggleAria: {
      fi: "Valikko",
      sv: "Meny",
      en: "Menu",
    },
    search: {
      fi: "Hae",
      sv: "Sök",
      en: "Search",
    },
    searchPlaceholder: {
      fi: "Hae sivustolta",
      sv: "Sök på webbplatsen",
      en: "Search page",
    },
    login: {
      fi: "Kirjaudu sisään",
      sv: "Logga in",
      en: "Sign in",
    },
    loginAria: {
      fi: "Käyttäjä:",
      sv: "Användare:",
      en: "User:",
    },
    logout: {
      fi: "Kirjaudu ulos",
      sv: "Logga ut",
      en: "Sign out",
    },
    skip: {
      fi: "Siirry sivun pääsisältöön",
      sv: "Gå till huvudinnehåll",
      en: "Skip to main content",
    },
    languageSelectorLabel: {
      fi: "Kieli: Suomi. Vaihda kieli. Change language. Ändra språk.",
      sv: "Språk: Svenska. Ändra språk. Vaihda kieli. Change language.",
      en: "Language: English. Change language. Vaihda kieli. Ändra språk.",
    },
    navigation: [
      {
        fi: "Kaupunki ja hallinto",
        sv: "Staden och förvaltning",
        en: "City administration",
      },
      {
        fi: "Liikenne ja kartat",
        sv: "Kartor och trafik",
        en: "Maps and transport",
      },
      {
        fi: "Kasvatus ja koulutus",
        sv: "Fostran och utbildning",
        en: "Childhood and education",
      },
      {
        fi: "Kulttuuri ja vapaa-aika",
        sv: "Kultur och fritid",
        en: "Culture and leisure",
      },
    ],
    navigationDropdown: {
      label: {
        fi: "Asuminen ja ympäristö",
        sv: "Boende och miljö",
        en: "Housing and environment",
      },
      options: [
        {
          fi: "Asuminen",
          sv: "Boende",
          en: "Housing",
        },
        {
          fi: "Kaavoitus ja suunnittelu",
          sv: "Planläggning",
          en: "Planning",
        },
        {
          fi: "Rakentaminen",
          sv: "Byggande",
          en: "Construction",
        },
      ],
    },
  };
  const languages: LanguageOption[] = [
    { label: "Suomeksi", value: "fi" },
    { label: "På svenska", value: "sv" },
    { label: "In English", value: "en" },
  ];

  const [authenticated, setAuthenticated] = useState(false);
  const [language, setLanguage] = useState<string>("fi");
  const [active, setActive] = useState<string>();

  // show helsingfors logo if swedish is selected as the language
  const logoLanguage = language === "sv" ? "sv" : "fi";

  const args = {
    title: "Helsinki Design System",
    titleAriaLabel: "Helsinki: Helsinki Design System",
    titleUrl: "https://hel.fi",
    theme: "light",
    menuToggleAriaLabel: "Menu",
    skipTo: "#content",
    skipToContentLabel: "Skip to main content",
    searchLabel: "Search",
    searchPlaceholder: "Search page",
    authenticated: false,
    userName: "John Doe",
  };

  return (
    <>
      {/* @ts-ignore */}
      <Navigation
        {...args}
        logoLanguage={logoLanguage}
        title={i18n.title[language]}
        titleAriaLabel={i18n.titleAria[language]}
        skipToContentLabel={i18n.skip[language]}
        menuToggleAriaLabel={i18n.menuToggleAria[language]}
      >
        {/* NAVIGATION ROW */}
        <Navigation.Row>
          {i18n.navigation.map((item, index) => {
            return (
              <Navigation.Item
                key={item[language]}
                href="#"
                active={active === `link-${index}`}
                label={item[language]}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(`link-${index}`);
                }}
              />
            );
          })}
          <Navigation.Dropdown
            active={active === "dropdown"}
            label={i18n.navigationDropdown.label[language]}
          >
            {i18n.navigationDropdown.options.map((option, index) => {
              return (
                <Navigation.Item
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  label={option[language]}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive("dropdown");
                  }}
                />
              );
            })}
          </Navigation.Dropdown>
        </Navigation.Row>

        {/* NAVIGATION ACTIONS */}
        <Navigation.Actions>
          {/* SEARCH */}
          <Navigation.Search
            searchLabel={i18n.search[language]}
            searchPlaceholder={i18n.searchPlaceholder[language]}
          />

          {/* USER */}
          <Navigation.User
            authenticated={authenticated}
            buttonAriaLabel={`${i18n.loginAria[language]} ${args.userName}`}
            label={i18n.login[language]}
            onSignIn={() => setAuthenticated(true)}
            userName={args.userName}
          >
            <Navigation.Item
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setAuthenticated(false);
              }}
              variant="supplementary"
              label={i18n.logout[language]}
              icon={<IconSignout aria-hidden />}
            />
          </Navigation.User>

          {/* LANGUAGE SELECTOR */}
          <Navigation.LanguageSelector
            label={language.toUpperCase()}
            buttonAriaLabel={i18n.languageSelectorLabel[language]}
          >
            {languages.map((lang) => {
              return (
                <Navigation.Item
                  key={lang.value}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLanguage(lang.value);
                  }}
                  label={lang.label}
                />
              );
            })}
          </Navigation.LanguageSelector>
        </Navigation.Actions>
      </Navigation>
    </>
  );
};

export default NavigationExample;
