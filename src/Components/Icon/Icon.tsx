import { ReactComponent as Telegram } from "Icons/telegramIcon.svg";
import { ReactComponent as Skype } from "Icons/skypeIcon.svg";
import { ReactComponent as Chrome } from "Icons/chromeIcon.svg";
import { ReactComponent as Steam } from "Icons/steamIcon.svg";
import { ReactComponent as User } from "Icons/userIcon.svg";
import { ReactComponent as Power } from "Icons/powerIcon.svg";
import { ReactComponent as Sleep } from "Icons/sleepModIcon.svg";
import { ReactComponent as Reload } from "Icons/reloadModIcon.svg";
import { ReactComponent as Postman } from "Icons/postmanIcon.svg";
import { ReactComponent as WebStorm } from "Icons/webstormIcon.svg";
import { ReactComponent as Search } from "Icons/searchIcon.svg";
import { ReactComponent as Windows } from "Icons/windowsIcon.svg";
import { ReactComponent as Arrow } from "Icons/upArrowIcon.svg";
import { ReactComponent as TextFile } from "Icons/TextFileIcon.svg";
import { ReactComponent as Folder } from "Icons/folderIcon.svg";
import { ReactComponent as Bin } from "Icons/binIcon.svg";
import { ReactComponent as Settings } from "Icons/winSettings.svg";
import { ReactComponent as Cross } from "Icons/crossIcon.svg";
import { ReactComponent as PlusCircle } from "Icons/plusCircleIcon.svg";
import { ReactComponent as ViewBoxes } from "Icons/viewBoxesIcon.svg";
import { ReactComponent as RightArrow } from "Icons/rightArrow.svg";
import { ReactComponent as SquareList } from "Icons/squareListIcon.svg";
import { ReactComponent as Dot } from "Icons/dotIcon.svg";
import { ReactComponent as SquareInSquare } from "Icons/squareOnSquare.svg";
import { ReactComponent as SquareOutline } from "Icons/squareOutline.svg";
import { ReactComponent as Line } from "Icons/line.svg";
import { ReactComponent as FullArrow } from "Icons/fullArrow.svg";
import { ReactComponent as Edit } from "Icons/edit.svg";
import { ReactComponent as Stash } from "Icons/delete.svg";
import { ReactComponent as Github } from "Icons/github.svg";
import { ReactComponent as Linkedin } from "Icons/linkedin.svg";
import {
    TELEGRAM,
    SKYPE,
    GOOGLE_CHROME,
    STEAM,
    POSTMAN,
    WEBSTORM,
} from "Constants/TaskPanel";
import { FOLDER, BIN } from "Constants/Desktop";
import {

    DOT,//
    ICONS,

    RELOAD,//

    SLEEP,//

    SQUARE_LIST,//

} from "Constants/System";

type IProps = {
    name: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
};

const Icons = {
    [TELEGRAM]: Telegram,
    [SKYPE]: Skype,
    [GOOGLE_CHROME]: Chrome,
    [STEAM]: Steam,
    [POSTMAN]: Postman,
    [WEBSTORM]: WebStorm,
    [ICONS.USER]: User,
    [ICONS.POWER]: Power,
    [SLEEP]: Sleep,
    [RELOAD]: Reload,
    [ICONS.SEARCH]: Search,
    [ICONS.WINDOWS]: Windows,
    [ICONS.ARROW]: Arrow,
    [ICONS.TEXT_FILE]: TextFile,
    [FOLDER]: Folder,
    [BIN]: Bin,
    [ICONS.SETTINGS]: Settings,
    [ICONS.CROSS]: Cross,
    [ICONS.PLUS_CIRCLE]: PlusCircle,
    [ICONS.VIEW_BOXES]: ViewBoxes,
    [ICONS.RIGHT_ARROW]: RightArrow,
    [SQUARE_LIST]: SquareList,
    [DOT]: Dot,
    [ICONS.SQUARE_IN_SQUARE]: SquareInSquare,
    [ICONS.SQUARE_OUTLINE]: SquareOutline,
    [ICONS.LINE]: Line,
    [ICONS.FULL_ARROW]: FullArrow,
    [ICONS.EDIT]: Edit,
    [ICONS.STASH]: Stash,
    [ICONS.GITHUB]: Github,
    [ICONS.LINKEDIN]: Linkedin,
};

const Icon = (props: IProps) => {
    const { name } = props;
    const Component = Icons[name as keyof typeof Icons];

    if (!Component) return null;

    return <Component {...props} />;
};

export default Icon;
