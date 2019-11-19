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

            // create iframe
            var iframe = document.createElement('iframe');
            iframe.className = 'track_player';
            iframe.src = 'https://anchor.fm' + jsonTemp[trackNum];
            iframe.frameBorder = '0';
            iframe.scrolling = "no";
            
            // create buttons for next and previous nav
            var btn_container = document.createElement('div');
            var btn_next = document.createElement('button');
            btn_next.innerHTML = 'Next Podcast';
            btn_next.className = 'next_btn';
            var btn_prev = document.createElement('button');
            btn_prev.innerHTML = 'Previous Podcast';
            btn_prev.className = 'prev_btn';

            // create label
            var index_label = document.createElement('span');
            index_label.className = 'index_label';
            index_label.innerHTML = (trackNum+1) + ' / ' + jsonTemp.length;

            // append elements to widget body
            $widget.find('.ec-anchor-podcast').append(iframe);
            btn_container.append(btn_prev);
            btn_container.append(index_label);
            btn_container.append(btn_next);
            $widget.find('.ec-anchor-podcast').append(btn_container);
            
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