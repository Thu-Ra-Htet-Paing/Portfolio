import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              Currently developing my skills in web development, focusing on
              creating responsive, accessible, and performant web applications
              using modern technologies. Excited to take on new challenges and
              contribute to meaningful projects.
            </p>

            <p className="text-muted-foreground">
              I’m continuously building on my skills by exploring new
              frameworks, tools, and development practices. Turning complexity
              into clarity through code is a part of the work I enjoy most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Thu-Ra-Htet-Paing.pdf"
                download="Thu-Ra-Htet-Paing.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible user interfaces with
                    JavaScript and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating backends with Node.js + Express or PHP + Laravel,
                    integrating MongoDB and MySQL for data and authentication.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Connecting frontends and backends by integrating React with
                    Node or Laravel APIs, linking databases, and deploying small
                    projects to learn the full cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
