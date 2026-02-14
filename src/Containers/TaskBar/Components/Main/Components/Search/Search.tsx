import { ICONS } from "constants/icons";
import { ChangeEvent } from "react";
import { useAppDispatch } from "store/index";
import { Icon } from "Components/index";
import styles from "./Search.module.scss";

const Search = () => {
    const dispatch = useAppDispatch();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
    };

    return (
        <div className={styles.taskPanelSearch}>
            <Icon name={ICONS.SEARCH} className={styles.searchIcon} />
            <input
                className={styles.taskPanelSearchInput}
                placeholder='Пошук'
                value={"In progress.."}
                onChange={handleInputChange}
            />
            {/* {searchInput.searchInputModalOpen && (
                <div
                    className={cn(
                        styles.searchInputModal,
                        styles.taskPanelModal,
                    )}
                >
                    1
                </div>
            )} */}
        </div>
    );
};

export default Search;
