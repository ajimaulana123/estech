import Marquee from '@/components/ui/marquee'
import React from 'react'
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiCloudinary, SiDrizzle, SiPrisma, SiMongoose, SiExpress, SiBun, SiChakraui, SiFramer, SiGreensock, SiVercel } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const technologies = [
  { name: 'React', Icon: FaReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'Cloudinary', Icon: SiCloudinary },
  { name: 'Drizzle', Icon: SiDrizzle },
  { name: 'Prisma', Icon: SiPrisma },
  { name: 'Mongoose', Icon: SiMongoose },
  { name: 'Express', Icon: SiExpress },
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'Bun', Icon: SiBun },
  { name: 'Bootstrap', Icon: FaBootstrap },
  { name: 'Chakra UI', Icon: SiChakraui },
  { name: 'shadcn/ui', Icon: SiNextdotjs }, // Using Next.js icon as a placeholder for shadcn/ui
  { name: 'Framer Motion', Icon: SiFramer },
  { name: 'GSAP', Icon: SiGreensock },
  { name: 'REST API', Icon: TbApi },
  { name: 'Vercel', Icon: SiVercel },
]

const TechMarque = () => {
  const halfLength = Math.ceil(technologies.length / 2)
  const firstHalf = technologies.slice(0, halfLength)
  const secondHalf = technologies.slice(halfLength)

  return (
    <>
      <Marquee className="py-8" repeat={5}>
        {firstHalf.map((tech, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="bg-muted rounded-lg shadow-md p-4 aspect-video w-[200px] flex items-center justify-center gap-2">
              <tech.Icon size={40} />
              <p className="mt-2 text-sm font-semibold text-nowrap">{tech.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee className="py-8" repeat={5} reverse>
        {secondHalf.map((tech, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="bg-muted rounded-lg shadow-md p-4 aspect-video w-[200px] flex items-center justify-center gap-2">
              <tech.Icon size={40} />
              <p className="mt-2 text-sm font-semibold text-nowrap">{tech.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  )
}

export default TechMarque