export const attachRedirectUrl = ({
  url,
  redirectUrl
}: {
  url: string;
  redirectUrl: string | null;
}) => {
  let fullUrl = url;
  if (!url.startsWith('http')) fullUrl = window.location.protocol + window.location.host + url;

  const newUrl = new URL(fullUrl);
  if (redirectUrl) newUrl.searchParams.append('redirect', redirectUrl);
  return newUrl.toString();
};
