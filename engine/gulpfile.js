var gulp = require('gulp');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var header = require('gulp-header');

gulp.task('default', function() {
    return gulp.src([
            'lib/paper.js',
            'lib/SAT.js',
            'lib/atomic.js',
            'lib/convert-range.js',
            'lib/croquis.js',
            'lib/esprima.js',
            'lib/floodfill.min.js',
            'lib/howler.js',
            'lib/invert.min.js',
            'lib/is-var-name.js',
            'lib/jquery-3.3.1.min.js',
            'lib/jquery.pressure.min.js',
            'lib/jszip.js',
            'lib/lerp.js',
            'lib/pixi.js',
            'lib/platform.js',
            'lib/potrace.js',
            'lib/timestamp.js',
            'lib/Tween.js',
            'lib/uuid.js',
            'src/Wick.js',
            'src/Clipboard.js',
            'src/FileCache.js',
            'src/History.js',
            'src/ObjectCache.js',
            'src/Transformation.js',
            'src/WickFile.js',
            'src/WickFile.Alpha.js',
            'src/ObjectCache.js',
            'src/Transformation.js',
            'src/base/Base.js',
            'src/base/Layer.js',
            'src/base/Project.js',
            'src/base/Selection.js',
            'src/base/Timeline.js',
            'src/base/Tween.js',
            'src/base/Path.js',
            'src/base/asset/Asset.js',
            'src/base/asset/FileAsset.js',
            'src/base/asset/ImageAsset.js',
            'src/base/asset/ClipAsset.js',
            'src/base/asset/SoundAsset.js',
            'src/base/tickable/api/Global.js',
            'src/base/tickable/Tickable.js',
            'src/base/tickable/Frame.js',
            'src/base/tickable/clip/Clip.js',
            'src/base/tickable/clip/Button.js',
            'src/view/paper-ext/Layer.erase.js',
            'src/view/paper-ext/Layer.hole.js',
            'src/view/paper-ext/Paper.OrderingUtils.js',
            'src/view/paper-ext/Paper.SelectionWidget.js',
            'src/view/paper-ext/Paper.SelectionBox.js',
            'src/view/paper-ext/Path.potrace.js',
            'src/view/paper-ext/TextItem.edit.js',
            'src/view/paper-ext/View.pressure.js',
            'src/view/paper-ext/View.gestures.js',
            'src/view/paper-ext/View.scrollToZoom.js',
            'src/view/tools/Tool.js',
            'src/view/tools/Brush.js',
            'src/view/tools/Cursor.js',
            'src/view/tools/Ellipse.js',
            'src/view/tools/Eraser.js',
            'src/view/tools/Eyedropper.js',
            'src/view/tools/FillBucket.js',
            'src/view/tools/Line.js',
            'src/view/tools/None.js',
            'src/view/tools/Pan.js',
            'src/view/tools/Pencil.js',
            'src/view/tools/Rectangle.js',
            'src/view/tools/Text.js',
            'src/view/tools/Zoom.js',
            'src/view/View.js',
            'src/view/View.Project.js',
            'src/view/View.Selection.js',
            'src/view/View.Clip.js',
            'src/view/View.Button.js',
            'src/view/View.Timeline.js',
            'src/view/View.Layer.js',
            'src/view/View.Frame.js',
            'src/view/View.Path.js',
            'src/gui/GUIElement.js',
            'src/gui/GUIElement.Clickable.js',
            'src/gui/GUIElement.CreateLayerLabel.js',
            'src/gui/GUIElement.Draggable.js',
            'src/gui/GUIElement.AddFrameOverlay.js',
            'src/gui/GUIElement.Frame.js',
            'src/gui/GUIElement.FrameEdge.js',
            'src/gui/GUIElement.FrameGhost.js',
            'src/gui/GUIElement.FrameLeftEdge.js',
            'src/gui/GUIElement.FrameRightEdge.js',
            'src/gui/GUIElement.FramesContainer.js',
            'src/gui/GUIElement.FramesContainerBG.js',
            'src/gui/GUIElement.FramesStrip.js',
            'src/gui/GUIElement.LayerButton.js',
            'src/gui/GUIElement.LayerGhost.js',
            'src/gui/GUIElement.LayerHideButton.js',
            'src/gui/GUIElement.LayerLabel.js',
            'src/gui/GUIElement.LayerLockButton.js',
            'src/gui/GUIElement.LayersContainer.js',
            'src/gui/GUIElement.LayersContainerBG.js',
            'src/gui/GUIElement.NumberLine.js',
            'src/gui/GUIElement.OnionSkinRange.js',
            'src/gui/GUIElement.OnionSkinRangeEnd.js',
            'src/gui/GUIElement.OnionSkinRangeStart.js',
            'src/gui/GUIElement.Playhead.js',
            'src/gui/GUIElement.Project.js',
            'src/gui/GUIElement.Scrollbar.js',
            'src/gui/GUIElement.ScrollbarGrabberHorizontal.js',
            'src/gui/GUIElement.ScrollbarGrabberVertical.js',
            'src/gui/GUIElement.ScrollbarHorizontal.js',
            'src/gui/GUIElement.ScrollbarVertical.js',
            'src/gui/GUIElement.SelectionBox.js',
            'src/gui/GUIElement.Timeline.js',
            'src/gui/GUIElement.Tween.js',
        ])
        .pipe(header('/*Wick Engine https://github.com/Wicklets/wick-engine*/'))
        .pipe(babel())
        .pipe(concat('wickengine.js'))
        .pipe(gulp.dest('dist'))
});
