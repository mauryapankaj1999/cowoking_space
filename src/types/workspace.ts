export interface WorkspaceImage {
  _id: string;
  url: string;
  public_id: string;
}

export interface WorkspacePlan {
  _id: string;
  title: string;
  price: number;
  description: string;
}

export interface OfficeTiming {
  label: string;
  value: string;
}

export interface Workspace {
  _id: string;
  name: string;
  slug: string;
  category: { name: string; slug: string };
  subCategory: { name: string; slug: string };
  images: WorkspaceImage[];
  shortDescription: string;
  description: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  mapLink?: string; 
  plans: WorkspacePlan[];
  amenities: string[];
  community: string[];
   officeTiming: OfficeTiming[];
   connectivity: string[]
      mainImages: WorkspaceImage[];
      // mainImages: WorkspaceImage[];
}
