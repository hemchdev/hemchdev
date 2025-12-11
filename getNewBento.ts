const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Hemanth&g=hemchdev&x=hemanthch.dev&l=hemanthsaich&i=https%3A%2F%2Fres.cloudinary.com%2Fdaafpg7r5%2Fimage%2Fupload%2Fv1765444048%2FIMG_20251211_143537_gjlhjx.jpg&p=https%3A%2F%2Fhemanthch.tech%2F&z=3a7d4";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
