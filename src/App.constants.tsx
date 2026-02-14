import { SYSTEM_SCENARIOS } from "constants/system";
import RestartScenario from "Containers/Screens/Components/SystemScenarios/RestartScenario";
import StartScenario from "Containers/Screens/Components/SystemScenarios/StartScenario";
import ShutDownScenario from "Containers/Screens/Components/SystemScenarios/ShutDownScenario";
import LockScenario from "Containers/Screens/Components/SystemScenarios/LockScenario";

export const SCENARIOS_MAP = {
    [SYSTEM_SCENARIOS.RESTART]: <RestartScenario />,
    [SYSTEM_SCENARIOS.START]: <StartScenario />,
    [SYSTEM_SCENARIOS.SHUTDOWN]: <ShutDownScenario />,
    [SYSTEM_SCENARIOS.LOCK]: <LockScenario />,
};