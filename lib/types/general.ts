export type GeneralConfigData = {
  siteName: string | null;
  siteDescription: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  copyright: string | null;
  email: string | null;
  phone: string | null;
  phoneContact: string | null;
  zalo: string | null;
  messengerUrl: string | null;
  address: string | null;
  workingTime: string | null;
  fanpageUrl: string | null;
  instagramUrl: string | null;
  googleMap: string | null;
  googleAnalytics: string | null;
  googleTagManager: string | null;
  googleSiteVerification: string | null;
  headJs: string | null;
  bodyJs: string | null;
  social: {
    facebook: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
  };
};

export type PhotoData = {
  photo: string | null;
  name: string | null;
  description: string | null;
};

export type GeneralData = {
  config: GeneralConfigData;
  logo: PhotoData | null;
  favicon: string | null;
  logoShare: PhotoData | null;
  logoFooter: PhotoData | null;
};
