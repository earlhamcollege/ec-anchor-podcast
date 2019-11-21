apos.define('ec-anchor-podcast-widgets', {
    extend: 'apostrophe-widgets',
    construct: function(self, options) {
        self.play = function($widget, data, options) {
            // temporary data to replace API
            var jsonTemp = [
                "/earlhamcollege/embed/episodes/Life-at-Earlham-A-conversation-with-Earlhamites-e8vok5",
                "/earlhamcollege/embed/episodes/Profiles-at-Earlham-A-conversation-with-Gene-Hambrick-e8vo5f",
                "/earlhamcollege/embed/episodes/Earlhamites-discuss-the-best-grub-off-campus-e8vo5d",
                "/earlhamcollege/embed/episodes/Bahamas-Research-Experience-e8vo54",
                "/earlhamcollege/embed/episodes/The-24---Hour-Theatre-Project-e8vo59",
                "/earlhamcollege/embed/episodes/Buddhism-And-Science-e8vo53",
                "/earlhamcollege/embed/episodes/Earlhamites-latrine-project-to-promote-peace-at-Kenyan-school-e8vo56",
                "/earlhamcollege/embed/episodes/Stopwatch-Science-Procrastination-e8vo55",
                "/earlhamcollege/embed/episodes/Stopwatch-Science-The-Psychology-Of-Smiling-e8vo57",
                "/earlhamcollege/embed/episodes/Transgender-Singing-Voice-Conference-e8vo58"
            ];
            // start at most recent track
            var trackNum = jsonTemp.length - 1;
            // set iframe
            var iframe = $widget.find('.track_player')[0];
            console.log(iframe);
            iframe.src = 'https://anchor.fm' + jsonTemp[trackNum];
            // create label text
            var index_label = $widget.find('.index_label')[0];
            console.log(index_label);
            index_label.innerText = (trackNum+1) + ' / ' + jsonTemp.length;
            // next track function
            $widget.find(".next_btn").click(function(){ 
                if (trackNum < jsonTemp.length - 1){
                    trackNum++;
                    iframe.src = 'https://anchor.fm' + jsonTemp[trackNum];
                    index_label.innerHTML = (trackNum+1) + ' / ' + jsonTemp.length;
                }
                else{
                    console.error('Most recent track reached!')
                }
            });

            // previous track function
            $widget.find(".prev_btn").click(function(){ 
                if (trackNum > 0){
                    trackNum--;
                    iframe.src = 'https://anchor.fm' + jsonTemp[trackNum];
                    index_label.innerHTML = (trackNum+1) + ' / ' + jsonTemp.length;
                }
                else{
                    console.error('First track reached!')
                }
            });
        };
    }
});