#!/bin/sh

# brew install tmux
#C-m acts like enter key in tmux


tmux new-session -d
tmux send-keys 'cd ~/src/outpost-platform/outpost-design-system/packages/outpost--primitives ; yarn storybook' C-m
tmux rename-window 'outpost--primitives'

tmux split-window -v -c
tmux send-keys 'cd ~/src/outpost-platform/outpost-design-system/packages/outpost--css ; yarn storybook' C-m
tmux rename-window 'outpost--css'

tmux split-window -v -c 
tmux send-keys 'cd ~/src/outpost-platform/outpost-design-system/packages/outpost--react ; yarn storybook' C-m
tmux rename-window 'outpost--react'

# sleep 20s
# tmux select-pane -t 1


# tmux split-window -v -c
# tmux send-keys 'cd ~/src/outpost-platform/outpost-design-system/packages/outpost--docs ; yarn storybook' C-m
# tmux rename-window 'outpost--docs'





tmux select-pane -t 1
tmux -2 attach-session 