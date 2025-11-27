import styles from "Components/ContextMenu/ContextMenu.module.scss";
import { EDIT, STASH } from "Constants/System";
import Icon from "Components/Icon/Icon";
import { Dispatch, SetStateAction } from "react";

const FileMenu = ({ targetId, setRenameFileId }:{targetId: string | null, setRenameFileId: Dispatch<SetStateAction<string>>}) => {
    return (
        <>
            <div className={styles.menuItem}>
                <div className={styles.wrapper} onClick={() => {targetId && setRenameFileId(targetId);}}>
                    <Icon name={EDIT} className={styles.itemIconTemp} />
                    <div className={styles.itemName}>
                        Перейменувати
                    </div>
                </div>
            </div>
            <div className={styles.menuItem}>
                <div className={styles.wrapper}>
                    <Icon name={STASH} className={styles.itemIconTemp} />
                    <div className={styles.itemName}>
                        Видалити
                    </div>
                </div>
            </div>
            <div className={styles.menuItem}>
                <div className={styles.wrapper}>
                    <Icon name={STASH} className={styles.itemIconTemp} />
                    <div className={styles.itemName}>
                        Властивості
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileMenu;