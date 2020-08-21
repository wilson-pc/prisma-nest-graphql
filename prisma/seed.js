const {PrismaClient}=require("@prisma/client");
const datas = require('./data.json');
let prisma=new PrismaClient();
var promises=[]
datas.forEach((ele)=>{
    promises.push(prisma.user.create({data:{name:ele.name,email:ele.email,role:{connect:{name:"Client"}}}}))
}) 
async function generate(){
    await Promise.all(promises);
}
generate();