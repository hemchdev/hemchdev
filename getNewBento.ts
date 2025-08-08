const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Hemanth&g=hemchdev&x=hemanthch.dev&l=hemanthsaich&i=https%3A%2F%2Fres.cloudinary.com%2Fdaafpg7r5%2Fimage%2Fupload%2Fw_1000%2Car_16%3A9%2Cc_fill%2Cg_auto%2Ce_sharpen%2Fv1754627913%2FgitProfile_eqrsie.jpg&p=https%3A%2F%2Fhemanthch.tech%2F&z=67d48";
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
