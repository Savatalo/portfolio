import { type JSX, useEffect, useRef, useState } from "react";

interface TerminalProps {
    onTerminate: () => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
}

const Terminal: React.FC<TerminalProps> = ({ onTerminate, inputRef }) => {

    const fileSystem = {
        "~": {
            files: {
                
            },
            dirs: ["About","Education", "Experience", "Projects", "Skills"]
        },

        "~/About": {
            files: {
             "about_me.txt": `
I'm a junior software developer with over 2 years of experience.  
I have strong problem-solving skills, work well in a team, 
and I am highly motivated to grow in the field of cyber security, or data science and machine learning.  

I have hands-on experience with:
- <span style="color:#61dafb">React</span>
- <span style="color:#f7df1e">C</span>
- <span style="color:#a97bff">Python</span>
- <span style="color:#353333ff">Kali Linux</span>  

Always learning, always improving.`,

             "languages.txt": `Serbian: Native <br>English: Upper intermediate (B2)`,
             "interests.txt": `I have a wide range of hobbies and interests that keep me motivated, curious, and inspired. I enjoy <span style="color:#61DAFB">reading comics</span>, especially series with strong atmosphere and storytelling. I also like <span style="color:#FF6F61">going to the gym</span>, where I focus on discipline, progress, and staying active. I'm passionate about <span style="color:#FFD700">cars</span> and enjoy learning about automotive engineering, particularly German brands. I follow <span style="color:#FF1E1E">Formula 1</span> closely, keeping up with teams, races, and each season's development. Additionally, I have a strong interest in <span style="color:#7FDB7F">World War II history</span>, especially its strategies, events, and historical impact.<br/>`

            
            },
            dirs: []
        },

        "~/Education": {
            files: {
                "high_school.txt": `<b><span class="dc">Electrical Engineering High School "Nikola Tesla"</span>
<span class="cw">High School Diploma, Electrical and Electronics Engineering</span> 2020 - 2024

Back in high school, I didn’t have much experience with programming — only with 
<span style="color:#f7df1e">C</span> and 
<span style="color:#ff8800">Assembly</span>.  
Most of the skills and experience I have today were gained through self–learning, 
online courses, and personal projects.`,

"university.txt": `
I'm currently studying Computer Science at MB University.
During my studies, I've expanded my knowledge in software development, 
data structures, algorithms, and systems programming.

University helped me build a strong foundation, but most of my practical skills
come from personal projects, real-world practice, and continuous self-learning.

My focus areas during university include:
- Programming (C, Python, JavaScript)
- Operating systems and computer architecture
- Data science fundamentals

I'm always working on improving my technical skills and building real projects
alongside my academic work.
`

            },
            dirs: []
        },

        "~/Experience": {
            files: {
                "freelance.txt": `
Developed custom software solutions, web applications, and management systems 
for diverse clients, including military organizations and academic institutions.<br/>

Delivered projects such as: <br/>
- <span style="color:#4CC9F0">Website for war veterans with disabilities (RMVI)</span><br/>
- <span style="color:#F72585">A platform for a high school professor</span><br/>

These projects demonstrate experience in web development, client communication, 
and delivering complete sites.
`,

            },
            dirs: []
        },

        "~/Projects": {
            files: {
                "portfolio.txt": `
This portfolio website was built to showcase my skills, creativity, and ability 
to develop interactive, terminal-inspired user interfaces.<br/><br/>

I designed this project to highlight my experience in modern web development, 
focusing on clean architecture, responsive layouts, and a unique command-line 
navigation system.<br/><br/>

Main goals of this portfolio:<br/>
- <span style="color:#F72585">Show creativity through custom UI/UX concepts</span><br/>
- <span style="color:#B5179E">Present my work, skills, and completed projects</span><br/><br/>

This site reflects my passion for software development and continuous improvement, 
as well as my ability to design both functional and visually distinct applications.`,
                "hacathon.txt":  `
I participated in a 30-hour game jam where my team of three created a fully playable game 
under extreme time pressure.<br/><br/>

During development, I worked with <span style="color:#4CC9F0">Unity</span> and 
<span style="color:#F8C12D">C#</span> to build core gameplay mechanics and structure the project.<br/><br/>

This experience improved my teamwork and rapid problem-solving abilities while developing 
a complete game in a short timeframe.`
            },
            dirs: []
        },

        "~/Skills": {
            files: {
                "programming_languages.txt": `<span style="color: #F7DF1E">JavaScript</span> <span style="color: #3776AB">Python</span> <span style="color: #A8B9CC">C</span>`,
                "frontend.txt": `<span style="color: #61DAFB">React</span>`,
                "backend.txt": `<span style="color: #339933">Node</span>`,
                "databases.txt": `<span style="color: #47A248">MongoDB</span>`,
                "data_science.txt": `<span style="color: #150458">Pandas</span> <span style="color: #4DABCF">NumPy</span>`,
                "tools.txt": `<span style="color: #F05033">Git</span> <span style="color: #181717">GitHub</span>`,
                "cybersecurity.txt": `<span style="color: #353333ff">Kali Linux</span> <span style="color: #0052CC">Wireshark</span> <span style="color: #F05033">Metasploitable</span>`,
                "game_dev.txt": `<span style="color: #5c5858ff">Unity</span>`
            },
            dirs: []
        }
    };

    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<JSX.Element[]>([]);
    const [currentPath, setCurrentPath] = useState<string>("~");

    const main = useRef<HTMLDivElement | null>(null);

    const getPrompt = () =>
        `user@savatalo.dev:${currentPath}${currentPath === "~" ? "" : ""}$ `;

    useEffect(() => {
        main.current?.scrollTo({
            top: main.current.scrollHeight,
            behavior: "smooth"
        });
    }, [output]);

    const addOutput = (content: JSX.Element) => {
        setOutput(prev => [...prev, content]);
    };

    const handleLs = () => {
        // @ts-ignore
        const current = fileSystem[currentPath];
        const files = Object.keys(current.files).join(" ");

        const dirs = current.dirs
            .map((d: string) => `<span class="dc">${d}</span>/`)
            .join(" ");

        const content = [files, dirs].filter(Boolean).join(" ");

        addOutput(
            <div>
                <span className="gc">{getPrompt()}</span>
                {input}
                <br />
                <span
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <br />
            </div>
        );
    };

    const handleCat = (filename: string) => {
        // @ts-ignore
        const current = fileSystem[currentPath];

        if (current.files[filename]) {
            addOutput(
                <div>
                    <span className="gc">{getPrompt()}</span>
                    {input}
                    <br />
                    <span
                        dangerouslySetInnerHTML={{
                            __html: current.files[filename]
                        }}
                    />
                </div>
            );
        } else {
            addOutput(
                <div>
                    <span className="gc">{getPrompt()}</span>
                    {input}
                    <br />
                    {input}: No such <span className="cw">file</span> or{" "}
                    <span className="cw">directory</span>
                </div>
            );
        }
    };

    const handleCd = (dirname: string) => {
        if (dirname === "..") {
            if (currentPath !== "~") setCurrentPath("~");
            addOutput(
                <div>
                    <span className="gc">{getPrompt()}</span>
                    {input}
                    <br />
                </div>
            );
        } else {
            // @ts-ignore
            const current = fileSystem[currentPath];

            if (current.dirs.includes(dirname)) {
                setCurrentPath(`~/${dirname}`);
                addOutput(
                    <div>
                        <span className="gc">{getPrompt()}</span>
                        {input}
                        <br />
                    </div>
                );
            } else {
                addOutput(
                    <div>
                        <span className="gc">{getPrompt()}</span>
                        {input}
                        <br />
                        {input}: No such{" "}
                        <span className="cw">file</span> or{" "}
                        <span className="cw">directory</span>
                    </div>
                );
            }
        }
    };

    const handleEcho = () => {
        const text = input.trim().substring(input.trim().indexOf(" ") + 1);

        addOutput(
            <div>
                <span className="gc">{getPrompt()}</span>
                {input}
                <br />
                {text}
            </div>
        );
    };

    const handleCommand = () => {
        const trimmed = input.trim();
        const prompt = getPrompt();

        if (trimmed === "") {
            addOutput(<div><span className="gc">{prompt}</span><br /></div>);
            return;
        }

        const parts = trimmed.split(" ");
        const command = parts[0];
        const arg = parts.slice(1).join(" ");

        switch (command) {
            case "clear":
                setOutput([]);
                break;

            case "echo":
                handleEcho();
                break;

            case "ls":
                handleLs();
                break;

            case "cat":
                handleCat(arg);
                break;

            case "cd":
                handleCd(arg);
                break;
            default:
                addOutput(
                    <div>
                        <span className="gc">{prompt}</span>
                        {input}
                        <br />
                        {trimmed}:{" "}
                        <span className="cw">command</span> not found
                    </div>
                );
        }
    };

    return (
        <div className="terminal">

            <pre className="portfolio">{`
                ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
                ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
                ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
                ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
                ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
                ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝
            `}</pre>

            <div className="main-terminal" ref={main}>
                <div className="terminal-output">
                    {output}
                </div>

                <div className="input-line">
                    <span className="gc prompt">{getPrompt()}</span>
                    <input
                        className="flex-1"
                        type="text"
                        value={input}
                        ref={inputRef}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleCommand();
                                setInput("");
                            }
                        }}
                    />
                </div>
            </div>

            <p className="terminal-manual">
                This site features a terminal-inspired interface, simulating a command-line environment 
                for navigating and interacting with files. 
                Essential commands include: &lt;<span className="command">ls</span>&gt; list files, 
                &lt;<span className="command">cd</span>&gt; enter directory, 
                &lt;<span className="command">cd ..</span>&gt; go back, 
                &lt;<span className="command">cat *.txt</span>&gt; read file, 
                &lt;<span className="command">echo</span>&gt; echo word,
                &lt;<span className="command">clear</span>&gt; clear the terminal.
            </p>

        </div>
    );
};

export default Terminal;
