# Image style

Every image in every reform follows these rules, so the channel looks like one thing.

## Format

| | |
|---|---|
| Aspect ratio | 9:16 vertical (Instagram Reels, YouTube Shorts) |
| Size | 1080 x 1920 px, PNG |
| File name | `01.png`, `02.png`, ... matching the slide number in `presentation.md` |
| Safe area | Keep the subject in the middle. Leave the top 250 px and bottom 420 px free of anything important: the apps cover them with captions and buttons. |

Long-form videos reuse the same style at 16:9 (1920 x 1080), saved as `wide-01.png`, ...

## Look

- **Style:** flat editorial illustration. Simple shapes, clean edges, soft shadows. Not photorealistic, not 3D, not cartoonish.
- **Palette:** deep green `#0B6B43`, off-white `#F6F7F5`, charcoal `#17201B`, warm amber `#E0A526` as the single accent. Muted greys and tans for everything else.
- **Light:** soft, even daylight. No neon, no heavy gradients, no lens effects.
- **Composition:** one clear subject per image. Plenty of empty space. Eye-level or slightly elevated view.
- **Mood:** calm and constructive. Problems are shown plainly, without misery or outrage.

## Never

- **No text, numbers, signs or labels inside the image.** Image tools misspell them. Titles, figures and the scorecard are added in the video editor.
- No real people, politicians or public figures. No recognisable faces.
- No party symbols, party colours used as symbols, or flags used to make a point.
- No real company logos or brand names.
- No images that mock a place, a group or a profession.

## People and places

- People are drawn simply, in everyday Pakistani dress, with a mix of ages and of men and women.
- Pakistani settings look like Pakistan: real building types, vehicles and streets, shown with respect.
- Foreign examples show the real place accurately enough to recognise the kind of city, without landmarks doing the work.

## Style block

Append this to every image prompt, unchanged:

```
Flat editorial illustration, simple geometric shapes, clean edges, soft shadows.
Limited palette: deep green #0B6B43, off-white #F6F7F5, charcoal #17201B, single accent warm amber #E0A526, muted greys and tans.
Soft even daylight, calm constructive mood, one clear subject, generous empty space.
Vertical 9:16 composition, subject centred, top and bottom of the frame left uncluttered.
No text, no letters, no numbers, no logos, no signage, no recognisable real people.
```

## Writing a slide's image prompt

In `presentation.md`, the **Image prompt** describes only the content: what is in the scene and what it is doing. One or two sentences. The style block supplies the rest.

## Checking an image before it goes in

- Right size and name.
- No stray text or symbols anywhere in the frame.
- Colours match the palette when placed next to earlier images.
- Still reads clearly at phone size.
