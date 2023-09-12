import { formatDate, getAdvisories } from "./utils.js";

const baseUrl = "https://www.vmware.com/";
const currentDate = formatDate(new Date("2023-09-05"));
const advPath = `/bin/vmware/getmodernizeadvisorieslist?resourcePath=/content/vmware/vmware-published-sites/us/security/advisories&searchText=${currentDate}`;

let data = [];

async function getDetails() {
  const advisories = await getAdvisories(`${baseUrl}${advPath}`);
  let singleAdvisor = {};

  advisories.data.foreach(async (item) => {});
}
