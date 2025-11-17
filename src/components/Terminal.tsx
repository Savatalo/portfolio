export default function Terminal() {
    return( 
    <div className="terminal">
        <pre className="portfolio">
            {`    
                ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
                ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
                ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
                ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
                ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
                ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝        
            `}
        </pre>

        <div className="terminal-input-line">

            <span className="prompt">user@savatalo.dev:~$</span>
            <input
                className="terminal-input"
                type="text"
                autoFocus
            />
        </div>

        <p className="terminal-manual">
            This site features a terminal-inspired interface, simulating a command-line environment 
            for navigating and interacting with files. 
            Essential commands include: &lt;<span className="command">ls</span>&gt; list files, &lt;<span className="command">cd</span>&gt; enter directory, 
            &lt;<span className="command">cd ..</span>&gt; go back, &lt;<span className="command">cat *.txt</span>&gt; read file, &lt;<span className="command">clear</span>&gt; clear the terminal, &lt;<span className="command">clear</span>&gt; 
            print text.
        </p>


    </div>)
}