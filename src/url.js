var protocol = window.location.protocol;
var slashes = protocol.concat("//");
var host = slashes.concat(window.location.host);
if (window.location.port) {
    host = host.replace("3000", "8000")
}
export const HOST = host.concat("/");
export const HOME_URL = "/";
export const MENU_URL = "/menu/";
export const CONTACT_URL = "/contact/";
export const TEAM_URL = "/team/";