const dns = require("node:dns/promises");

(
    async () =>{
        const result = await dns.lookup("ec2-43-200-180-21.ap-northeast-2.compute.amazonaws.com")
        console.log(result)
    }
)()