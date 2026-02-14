import { WALLPAPERS } from "constants/wallpapers";
import { useAppDispatch, useAppSelector } from "store/index";
import { selectWallpaper } from "store/selectors/system";
import { changeWallpaper } from "store/slices/system";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { WallpapersStyled } from "./Wallpapers.styled";

const Wallpapers = () => {
    const dispatch = useAppDispatch();
    const currentWallpaper = useAppSelector(selectWallpaper);

    const onWallpaperChange = (newWallpaper: string) => {
        dispatch(changeWallpaper(newWallpaper));
    };

    return (
        <BlockBasic>
            {WALLPAPERS.map(wallpaper => {
                return (
                    <WallpapersStyled
                        key={wallpaper}
                        isSelected={currentWallpaper === wallpaper}
                        sx={{ backgroundImage: `url(${wallpaper})` }}
                        onClick={() => onWallpaperChange(wallpaper)}
                    />
                );
            })}
        </BlockBasic>
    );
};

export default Wallpapers;