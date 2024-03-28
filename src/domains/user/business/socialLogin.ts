interface SocialLoginControllerProps {
  queryObject: Record<string, string>;
  authUrl: string;
}

class SocialLoginController {
  private queryObject: Record<string, string>;
  private authUrl?: string;

  constructor({ queryObject, authUrl }: SocialLoginControllerProps) {
    this.queryObject = queryObject;
    this.authUrl = authUrl;
  }

  redirect() {
    const query = new URLSearchParams(this.queryObject);
    window.location.assign(`${this.authUrl}?${query}`);
  }
}

export default SocialLoginController;
