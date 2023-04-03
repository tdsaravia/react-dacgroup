export interface ContentfulEntry {
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface Recipes {
  fields: {
    title: string;
    description: string;
    price: number;
    availableDate: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface CarouselEntry {
  fields: {
    title: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}
export interface RecipeCard {
  fields: {
    title: string;
    time: string;
    serve: string;
    link: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface About {
  fields: {
    title: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface SocialMedia {
  fields: {
    textLink: string;
    link: string;
    description: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    icon: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
  sys: {
    id: string;
  };
}
