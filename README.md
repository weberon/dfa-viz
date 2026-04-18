# dfa-viz

### Dev Process

#### Clone Chatbot Repository
- Clone ChatBot Repository to path: $WORKSPACE/frm_git
- CHATBOT_GIT_REPO=$(basename "$CHAT_GIT_URL" .git)
- CHATBOT_GIT_FOLDER="$WORKSPACE/frm_git/$CHATBOT_GIT_REPO"

#### Clone dfagent_visualizer Repository
- Clone dfagent_visualizer to path: $WORKSPACE/frm_git
- DFAGENTVISUALIZER_GIT_REPO=$(basename "$DFAGENTVISUALIZER_GIT_URL" .git)
- DFAGENTVISUALIZER_GIT_FOLDER="$WORKSPACE/frm_git/$DFAGENTVISUALIZER_GIT_REPO"

#### Clone DFA-VIZ Repository
- Clone dfa-viz to path: $WORKSPACE/frm_git
- DFAVIZ_GIT_REPO=$(basename "$DFAVIZ_GIT_URL" .git)
- DFAVIZ_GIT_FOLDER="$WORKSPACE/frm_git/$DFAVIZ_GIT_REPO"

#### Process DF Agents through `app.js`
- Goto to `$DFAGENTVISUALIZER_GIT_FOLDER` (Git Cloned dir)
- Perform `npm install`
- DFA_AGENTS_PATH = "$CHATBOT_GIT_FOLDER/dfagents"
- Create/Update input.json
```JSON
{
    "agentsFolderPath" : "$DFA_AGENTS_PATH"
}
```
- Execute `node app.js`

#### Build DFA Visualizer
- Goto to Visualizer Folder `$DFAGENTVISUALIZER_GIT_FOLDER/intent-flow-graph` (Git Cloned dir)
- Perform `npm install`
- perm `npm run build`

#### Copy Build/Dist to DFA-VIZ and Execute Deploy
- Goto `$DFAVIZ_GIT_REPO`
- Checkout `Dev` branch
- Perform `npm install`
- Copy `$CHATBOT_GIT_FOLDER/dfagents/dist` to `$DFAVIZ_GIT_REPO/build`

#### Run Pre-procesor
- Goto `$DFAVIZ_GIT_REPO`
- Perform `node preprocessor.js`

#### Deploy
- Goto `$DFAVIZ_GIT_REPO`
- Perform `npm run deploy`
