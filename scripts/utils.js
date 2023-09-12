import axios from "axios";

const headers = {
  accept: "application/json, text/javascript, */*; q=0.01",
  "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
  "sec-ch-ua":
    '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest",
  cookie:
    '_abck=9426712A3F652117487B215104A362E2~0~YAAQQ1cQYIlOHoOKAQAAZVDRigqgJTOOQPaxwUgwsb9acg2SOA+Dp7nzeoN+9w2fUK6N9F6AbThk6WU0WCcJbfqznelVUK7OJRmtNyBC5Zhhldxm0uwMCRsO6RsemHFVNnafdCyrxDcM0aquavvjYD45MDRSxT3b7safJWXpd3W28yGATbJJmxReuSUSJpdng6We0+TpdQiZbFOY55oiZfRf4QaVs0qEcM22Y2+82JCVsxEPE1ZeLbh2PvMPhtnp7brzSlituHcRlC9PTzhN9BCP9uvAlMhp0mHPeU/oRV7nOEfPX7CVdCEs3gxaXKcgUFSdlyZrEkZHXeA25GIcZySsJ3XRBtg/7s7FLK+VukG4w7ZUzIhQ1cs6cID5huPpKqxfMMFKwjuuc57l5bb3ciObpQUeuffv~-1~-1~-1; bm_sz=3EBD2A2468FAD42AFEC2B7A587195A1D~YAAQQ1cQYIxOHoOKAQAAZVDRihVr2oH75hDjGp+gM4DKAclDD1FXyBY8jQ47Ztp6r3cbwd4RmH6cwGCV4sf2M7KKV/RyV/ZEHwdiBgue46ZrXTZZ7jSE7pmiuKYGuufjXUmr1nZwXTYhm2A5i2dzBDfukCC3eRHgPLVquFJhHzXlh3zM4F4njNApQ4KFm4lrr4tD05YVZvTLePP8cLU2MQ8+D+aDKVe1M1rvApCMuNq8HKXvjZqWYIa6hTtfrlwHIBTjhdU/WFusdijeq22oT7BHQZgvjF/yn4wqx0B6UPdVggk=~3162934~4473913; at_check=true; mboxEdgeCluster=37; AMCVS_5B29123F5245AD520A490D45%40AdobeOrg=1; AMCV_5B29123F5245AD520A490D45%40AdobeOrg=-1124106680%7CMCIDTS%7C19613%7CMCMID%7C43761258577950212943057363820604127281%7CMCAAMLH-1695150892%7C6%7CMCAAMB-1695150892%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1694553292s%7CNONE%7CvVersion%7C5.2.0; ak_bmsc=A16460EDCDB0D74CD4C541243EE6D542~000000000000000000000000000000~YAAQQ1cQYMxOHoOKAQAAz27RihXhWOkQzsrvvUb2sIvsQdl9xK6pOLgXtVP3DTirmCEPCsZAPNlO71iliVxqEw4OZX8hxWeANnCFoZcaGn+MUDlFO1wICqSFs8zdHl/Z5WRic4R6EaPORYYXDwZaFzXrNBBIyzcMu2zhHelnqVftCX2VVWWEHvlTD5ORPh/m1AT/LvWj0A9qxuJv7i7CYIf3AIJ2kMdmYMhjrORKGqFmH8ifB90pJ2ed/Dq+8LbkUOzbNJ1rvhw6cQFwY8qFDxNtKO28KB0nkkscqkTnT01+PCCyNb0D7V7EzK9xnoObzYHHbhhqrTSPwKimj6KuHevJXSJPqBB+8sQSaLhCEfom+IPSl5d92O2SJD/PpQAB1E9cozrogT3P3RGHU1GtsQNj1Lt+F3NCghHl4M6o4SEBEP1O14SQh4pCEl0oKW0r2ziXhu9YmXhgB/S+B5UZ+o1QVthjD54Pwf0e8IHY3zC3VphL69/OCtR1HlUjMAI=; ssearchvalue=; s_tbm=true; s_tbm1=true; s_cc=true; _gcl_au=1.1.44348592.1694546099; _fbp=fb.1.1694546099737.302686241; aam_uuid=39087628174259823152371242410623967924; __pdst=a46b1e1d66c84db5b9ac5c9cef280768; _mkto_trk=id:048-SZW-045&token:_mch-vmware.com-1694546100377-25814; ln_or=eyI2ODk3IjoiZCJ9; dIClick=not; __q_state_QxcexEM9kCrYjFfD=eyJ1dWlkIjoiZTEzNDhiMjEtODZiYi00ODZlLWJhYzUtM2Q1ZDgyMGFjOWJmIiwiY29va2llRG9tYWluIjoidm13YXJlLmNvbSIsIm1lc3NlbmdlckV4cGFuZGVkIjpmYWxzZSwicHJvbXB0RGlzbWlzc2VkIjpmYWxzZSwiY29udmVyc2F0aW9uSWQiOiIxMjIyOTE4OTczOTg0Mjc3Mzk5In0=; myvmware-www=02d02dc99a-4b61-4b2fW5C_aO4QG6oYQxowk4ELdC6BPtL4ycuNunGjgmN7uV-ydhUo02doFu9LHJiHI0RM0; lpv=us%20%3A%20en%20%3A%20vmware%20%3A%20products%20%3A%20cloud-disaster-recovery; s_sq=%5B%5BB%5D%5D; BE_CLA3=p_id%3D6RJ2JA46N6J4R26R224468AAAAAAAAAAAH%26bn%3D4%26bv%3D3.46%26s_expire%3D1694632576895%26s_id%3D6RJ2JA46N6J4RPN86NP468AAAAAAAAAAAH; dtCookie=v_4_srv_3_sn_B620979FA341A3E83E87D626009130DE_perc_100000_ol_0_mul_1_app-3A40cb821d091f8001_1_app-3A214312c3c548bfa0_1_app-3Ade8fc2aab7a5ee4c_1; rxVisitor=169454620213048T9382RM8MT72ADI4N8HSOUHC7894JS; dtSa=-; dtLatC=1124; pszGeoPref=us; rxvt=1694548007081|1694546202138; dtPC=3$146202101_886h-vQGJACHBCPUARIIBUBSHPHQKSPHARCMNH-0; mbox=PC#8165c49ca5344e75a0d1c10350b774ac.37_0#1757791049|session#c44e17d6e4e6413d89385158a7295b63#1694548109; utag_main=v_id:0187c81cad5600034cc283f6f6ec0506f006d0670086e$_sn:3$_ss:0$_st:1694548048679$_pn:6%3Bexp-session$ses_id:1694546091733%3Bexp-session; OptanonConsent=isGpcEnabled=0&datestamp=Tue+Sep+12+2023+20%3A17%3A29+GMT%2B0100+(UTC%2B01%3A00)&version=202306.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=16efe2de-7ba4-4d4d-8a25-2a9c168c74f9&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false; s_dse=https%3A%2F%2Fwww.google.com%2F%3Aus%20%3A%20en%20%3A%20vmware%20%3A%20security%20%3A%20advisories%3AGoogle%3ANatural%20Search; BE_CLA3=p_id%3D6RJ2JA46N6J4R26R224468AAAAAAAAAAAH%26bf%3D341370459c093152e470d876893f8d82%26bn%3D4%26bv%3D3.46%26s_expire%3D1694589450785%26s_id%3D6RJ2JA46N6J4RPN86NP468AAAAAAAAAAAH; fs_lua=1.1694546250874; fs_uid=#16QR4H#5dc4613c-2e28-4af0-94ef-d9ed84b8d605:0dace79b-c58e-45a7-9098-f922cf26eef4:1694546100476::6#/1726082097; _uetsid=aab9315051a011eea20c9b8d498b5837; _uetvid=f6df54f0e5ca11edb4b19f03382fdf9f; s_tp=7508; s_ppv=us%2520%253A%2520en%2520%253A%2520vmware%2520%253A%2520security%2520%253A%2520advisories%2C19%2C12%2C1445; _fid=287.89999999990687; s_ptc=0.01%5E%5E0.00%5E%5E0.00%5E%5E0.00%5E%5E1.48%5E%5E0.09%5E%5E7.98%5E%5E0.06%5E%5E9.54; _lcp=2124.2000000001863; _cls=0.0017995968187718096; bm_sv=9FCEDF893AEE32FF00F120AEAC44B344~YAAQBlcQYIU9coaKAQAA8QvVihVuZeoW+IJf8cc9aupZcxiLS5ltCpRlCuE+Ho7j6UeeOMnvr/yWXwbiB3mlM+ACPOBXCx6HqxWl2yFaGQLOSPPSnTnBbKWWRxXUjs4YDg95rMXj1n+7dZjYGazmygKWCr0Dj3Mu2fyKg9ikUUTWJDPJbney3/KV2aEefq48/dS5ogZ/zfrI+VDTUXCoyLrRh+qhO3rNU05FLUs2OxctbEoXm0sI9dViQkYs1Xce9g==~1; RT="z=1&dm=vmware.com&si=220f653c-1a2b-471d-ba48-cba33aaee375&ss=lmgozm5p&sl=5&tt=171q&bcn=%2F%2F684dd326.akstat.io%2F"',
  Referer: "https://www.vmware.com/security/advisories.html",
  "Referrer-Policy": "origin-when-cross-origin",
};

export async function getAdvisorie(url) {
  const response = await axios.get(url, headers);

  console.log(response.data);
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month since it's zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
