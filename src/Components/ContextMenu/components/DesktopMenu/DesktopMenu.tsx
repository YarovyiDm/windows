import styles from "Components/ContextMenu/ContextMenu.module.scss";
import Icon from "Components/Icon/Icon";
import { PLUS_CIRCLE, RIGHT_ARROW, TEXT_FILE, VIEW_BOXES } from "Constants/System";
import cn from "classnames";
import FileSize from "Components/ContextMenu/components/FileSize/FileSize";
import { FOLDER } from "Constants/Desktop";
import useLanguage from "Hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectFileSize } from "Store/selectors/System";
import { addDesktopFile } from "Store/slices/Desktop";
import { useId } from "react";
import { IProps } from "./DesktopMenu.types";

const DesktopMenu = ({ contextMenuPosition, setContextMenuVisible, onDesktopFileSizeChange } : IProps) => {
    const selectedSize = useAppSelector(selectFileSize);
    const { translate } = useLanguage();
    const fileId = useId();
    const dispatch = useAppDispatch();

    const createNewFile =
        ({ name, type }: { name: string; type: string }) =>
            () => {
                const newFile = {
                    name: name + `_${contextMenuPosition.x}`,
                    icon: type,
                    position: contextMenuPosition,
                    isSelected: false,
                    isOpened: false,
                    id: fileId,
                    type,
                    innerContent: [],
                    size: 1,
                };

                dispatch(addDesktopFile(newFile));
                setContextMenuVisible(false);
            };

    return (
        <>
            <div className={styles.menuItem}>
                <div className={styles.wrapper}>
                    <Icon name={VIEW_BOXES} className={styles.itemIcon} />
                    <div className={styles.itemName}>
                        {translate("iconsView")}
                    </div>
                </div>
                <Icon
                    name={RIGHT_ARROW}
                    className={cn(styles.itemArrow, styles.itemIcon)}
                />
                <FileSize selectedSize={selectedSize} onDesktopFileSizeChange={onDesktopFileSizeChange} />
            </div>
            <div className={styles.menuItem}>
                <div className={styles.wrapper}>
                    <Icon name={PLUS_CIRCLE} className={styles.itemIcon} />
                    <div className={styles.itemName}>
                        {translate("createNewFile")}
                    </div>
                </div>
                <Icon
                    name={RIGHT_ARROW}
                    className={cn(styles.itemArrow, styles.itemIcon)}
                />
                <div className={styles.subMenu}>
                    <div
                        className={styles.subMenuItem}
                        onClick={createNewFile({
                            name: translate("newFolder"),
                            type: FOLDER,
                        })}
                    >
                        <div className={styles.iconWrapper}>
                            <Icon name={FOLDER} />
                        </div>

                        <div className={styles.subMenuItemName}>
                            {translate("folder")}
                        </div>
                    </div>
                    <div
                        className={styles.subMenuItem}
                        onClick={createNewFile({
                            name: translate("newTextDocument"),
                            type: TEXT_FILE,
                        })}
                    >
                        <div className={styles.iconWrapper}>
                            <Icon name={TEXT_FILE} />
                        </div>
                        <div className={styles.subMenuItemName}>
                            {translate("textDocument")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DesktopMenu;