interface Props {
  clientId?: string;
  redirectUri?: string;
  responseType?: string;
  scope?: string;
  authUrl?: string;
}

class SocialLogin {
  clientId?: string;
  redirectUri?: string;
  responseType?: string;
  scope?: string;
  authUrl?: string;

  constructor({ clientId, redirectUri, responseType, scope }: Props) {
    this.clientId = clientId;
    this.redirectUri = redirectUri;
    this.responseType = responseType;
    this.scope = scope;
  }

  redirect() {
    const queryObject = {
      ...(this.clientId && { clientId: this.clientId }),
      ...(this.clientId && { redirectUri: this.redirectUri }),
      ...(this.clientId && { responseType: this.responseType }),
      ...(this.clientId && { scope: this.scope })
    };

    const query = new URLSearchParams(queryObject);
    window.location.assign(`${this.authUrl}?${query}`);
  }
}

export default SocialLogin;
