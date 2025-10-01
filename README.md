These are core features you’ll reuse across many components:

Auth / User State

userId, username, displayName, profilePic, theme, moodStatus

followersCount, followingCount

isVerified, isPrivate

Needed in Navbar, Feed, Profile, Composer.

Theme & Mood Status

Store selected profile theme (primaryColor, background, etc.)

Mood emoji/text should reflect everywhere.

Feed (Tweets + Reactions)

Tweets list (with infinite scroll + caching).

Reaction state (userReaction, counts).

Optimistic updates when liking/retweeting.

Stories

Active stories list (with viewed/unviewed status).

Story updates (when user posts a new one, it should reflect immediately).

Notifications

Store all notifications + unread count.

Bell icon + notifications page should use the same state.

Followers / Following

Following list (for "People You Follow").

Followers list (for profile pages).

Cached in Redux to avoid re-fetch every time.

Bookmarks

User’s saved tweets.

Synced between feed and bookmark page.

⚡ Keep Local (Component State, not Redux)

These don’t need Redux, just local useState:

Tweet Composer / AI Draft (input text, uploading media, AI-generated draft).

Story Composer (selected media, preview).

Voice Recording state (isRecording, audioBlob, progress).

Modal open/close (AI modal, story viewer modal, edit profile modal).

Search Bar input (ephemeral, only matters in that component).
