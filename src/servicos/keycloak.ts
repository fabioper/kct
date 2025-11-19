import Keycloak, { type KeycloakInitOptions } from "keycloak-js";

export const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

export const keycloakInitOptions: KeycloakInitOptions = {
  onLoad: "check-sso",
  redirectUri: window.location.origin,
};
