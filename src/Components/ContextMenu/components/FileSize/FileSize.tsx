import styles from "Components/ContextMenu/ContextMenu.module.scss";
import { DESKTOP_FILE_SIZE_UNIT } from "Constants/System";
import Icon from "Components/Icon/Icon";
import useLanguage from "Hooks/useLanguage";
import { IProps } from "Components/ContextMenu/components/FileSize/FileSize.types";

const FileSize = ({ selectedSize, onDesktopFileSizeChange }: IProps) => {
    const { translate } = useLanguage();
    
    return (
        <div className={styles.subMenu}>
            {DESKTOP_FILE_SIZE_UNIT.map(
                ({ size, name, iconName, hotKeys }) => {
                    const isSizeSelected =
                        size.height === selectedSize.height &&
                        size.width === selectedSize.width;

                    return (
                        <div
                            key={name}
                            className={styles.subMenuItem}
                            onClick={() =>
                                onDesktopFileSizeChange({
                                    width: size.width,
                                    height: size.height,
                                })
                            }
                        >
                            <div className={styles.subMenuItemName}>
                                <div className={styles.iconWrapper}>
                                    <Icon
                                        name={iconName}
                                        className={styles.sizeIcon}
                                    />
                                </div>
                                <div className={styles.sizeName}>
                                    {translate(name)}
                                </div>
                            </div>
                            <div className={styles.hotKeys}>
                                {hotKeys}
                            </div>
                            {isSizeSelected && (
                                <div className={styles.sizeSelected} />
                            )}
                        </div>
                    );
                },
            )}
        </div>
    );
};

export default FileSize;