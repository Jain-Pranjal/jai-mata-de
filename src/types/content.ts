
  export type Language = "english" | "hindi" | "tamil" | "telugu"; 
  export interface contentStyling {
  title: string;
  paragraphs: string[];
}

export interface NavigationContent {
  title: string;
  byAir: {
    heading: string;
    description: string;
  };
  byTrain: {
    heading: string;
    nearestStation: string;
    fromDelhi: {
      heading: string;
      details: string[];
    };
    toDelhi: {
      heading: string;
      details: string[];
    };
  };
  byRoad: {
    heading: string;
    description: string;
    routes: string[];
  };
  locationMap: {
    heading: string;
  };
}

export interface MelaContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageAlt: string;
}

export interface BhuraDevContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
}


export interface AdditionalInfo {
  title: string;
  sections: {
    heading: string;
    description: string;
  }[];
}

export interface ShakumbhariDeviContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  additionalInfo: AdditionalInfo;
}

export interface ChinnamastaDeviContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  images: {
    primary: string;
    secondary: string;
  };
}


