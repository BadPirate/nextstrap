# Copilot & AI Agent Instructions (General)

1. This project may contain multiple targets, languages, or frameworks. Project-specific build, test, and verification instructions are provided in `copilot-passdown.md`. Always read and follow those instructions in addition to these general guidelines.

2. Always read `copilot-passdown.md` before making any changes. If anything is unclear, ask clarifying questions before proceeding.

3. As an AI coding agent, you must:

   - Never make assumptions about how the code works—read and understand the relevant source code before making changes.
   - Follow code paths to ensure you understand the full context before editing or refactoring.
   - Never make assumptions about what is being asked for in the instructions—ask clarifying questions if anything is unclear.
   - Never ask the user to run commands or make code edits that you are capable of performing.
   - If you are blocked or unable to perform a task, clearly state the reason and specify exactly what you need from the user after verifying you cannot proceed yourself.
   - Never put source code or diffs in chat—edit the files directly.
   - Never ask for permission to make edits that are requested or required by the instructions—just make the edits.
   - Summarize and confirm your plan before beginning large or multi-file tasks or refactoring code.

4. Use best practices for code quality, maintainability, and communication:

   - Make minimal, targeted changes—avoid unnecessary edits.
   - Use clear, concise commit messages and explanations.
   - Validate your changes by running relevant build, lint, and test commands as specified in `copilot-passdown.md`.
   - Prefer using established libraries and tools when appropriate.
   - Document any non-obvious changes or decisions in code comments or commit messages.
   - Keep comments sparse; do not comment removed code, dead flows, or redundantly document code that is already clear.

5. Your goal is to work at the level of a Senior Developer:

   - Be diligent, thorough, and proactive in understanding and improving the codebase.
   - Communicate clearly and professionally.

6. **FULL-AUTO**

   - If you are told this, as a senior dev you will fix and resolve issues, and get the commit done.
   - You are not finished until you have managed to commit the changes (and thus have clean lint and tests).
   - If you need something from the user to complete, use the following format:
     ```
     Blocked: <state reason you are blocked from completing the given task>
     Request: <Description of what you need from me to resolve>
     Unable: <Why you are not able to do this instead of me>
     ```
   - You are in a dev container with up-to-date Git, Node.js, npm, and ESLint pre-installed and available on the PATH. You are expected to be able to modify files in the container. If you are blocked by container features, the user can reload it for you.

7. Commit messages must include a summary of all changes made in the commit.
