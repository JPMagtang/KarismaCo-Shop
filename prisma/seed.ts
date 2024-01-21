import fileServer from "node:fs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

prisma.product.create({
    data: {
        id: "1",
        name: "Multiuse Wrap Summer Cover Up Skirt by Karisma.Co",
        description: "Yez",
        price: "399",
    }
});