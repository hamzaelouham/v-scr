import { formatDate, getAdvisorie } from "./utils.js";

const baseUrl = "https://www.vmware.com/";
const currentDate = formatDate(new Date());
const advPath = `/bin/vmware/getmodernizeadvisorieslist?resourcePath=/content/vmware/vmware-published-sites/us/security/advisories&searchText=${currentDate}`;

getAdvisorie(`${baseUrl}${advPath}`);
