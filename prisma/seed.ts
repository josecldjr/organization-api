import { PrismaClient } from '@prisma/client';
import { genereateUUID } from '../src/infrastructure/helpers/text';

const prisma = new PrismaClient();

async function main() {
    const organizationNames = [
        "NovaSphere Tech",
        "Vertex Solutions",
        "Pinnacle Dynamics",
        "BrightHaven Enterprises",
        "Quantum Nexus",
        "EcoHaven Inc.",
        "TechPulse Innovations",
        "CloudSync Systems",
        "HealthSphere Partners",
        "GreenFuture Alliance",
        "InnoCore Labs",
        "SafeNet Solutions",
        "Visionary Ventures",
        "AetherEdge Technologies",
        "ZeroG Horizons",
    ];

    const generateFacilities = (organizationId: string) => {
        const facilityNames = [
            "Ergonomic Workstations",
            "Meditation Room",
            "Innovation Lab",
            "On-Site Gym",
            "Pet-Friendly Zones",
            "Daycare Services",
            "Cafeteria",
            "Wellness Workshops",
            "VR/AR Studio",
            "Collaborative Spaces",
        ];

        const facilities = [];
        const numFacilities = Math.floor(Math.random() * 4) + 3; // Entre 3 e 6

        for (let i = 0; i < numFacilities; i++) {
            facilities.push({
                name: facilityNames[Math.floor(Math.random() * facilityNames.length)],
                organizationId,
            });
        }

        return facilities;
    };

    const generateUsers = (organizationId: string, numUsers: number) => {
        const userNames = [
            "Alice Johnson", "Bob Smith", "Charlie Davis", "Diana Miller", "Ethan Brown",
            "Fiona White", "George Wilson", "Hannah Lee", "Isaac Moore", "Julia Adams",
            "Kevin Taylor", "Laura Clark", "Michael Hall", "Natalie Lewis", "Oliver Walker"
        ];

        const users = [];
        for (let i = 0; i < numUsers; i++) {
            const name = userNames[Math.floor(Math.random() * userNames.length)];
            const email = `${name.replace(' ', '.').toLowerCase()}${Math.floor(Math.random() * 10000)}@example.com`; // Email único
            const password = "$2b$10$LXPkB9X5tWk8GDbSAzwA0u0vwWccrU14L8sKkYhvuHJwpA3DzBu7G"; // Senha fixa
            users.push({
                name,
                email,
                password,
                organizationId,
            });
        }

        return users;
    };

    for (const name of organizationNames) {
        const uuid = genereateUUID();
        const organization = await prisma.organization.create({
            data: { id: uuid, name },
        });

        const isEmptyOrganization =
            organization.name === "Visionary Ventures" || organization.name === "AetherEdge Technologies";

        if (!isEmptyOrganization) {
            const facilities = generateFacilities(organization.id);
            await prisma.facility.createMany({ data: facilities });

            const numUsers = Math.floor(Math.random() * 3) + 1; // Entre 1 e 3 usuários
            const users = generateUsers(organization.id, numUsers);
            await prisma.user.createMany({ data: users });
        }
    }

    console.log("Organizations, facilities, and users created successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
