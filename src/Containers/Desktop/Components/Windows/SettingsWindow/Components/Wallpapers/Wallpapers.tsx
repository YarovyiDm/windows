import { WALLPAPERS } from "Constants/System";
// import "rc-slider/assets/index.css";
import { useAppDispatch, useAppSelector } from "Store/index";
import { selectWallpaper } from "Store/selectors/System";
import { changeWallpaper } from "Store/slices/System";
import { BlockBasic } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/BlockBasic/BlockBasic";
import { WallpapersStyled } from "Containers/Desktop/Components/Windows/SettingsWindow/Components/Wallpapers/Wallpapers.styled";

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